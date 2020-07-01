import React from 'react'
import PropTypes from 'prop-types'
import queryString from 'query-string'
import { isFunction, debounce, isError } from 'lodash'
import QueryTableManager from '../helpers/QueryTableManager'

const GET_CONFIG = () => ({
  Component: null,
  configs: {},
})

// configs = {
//   API: (p) => ApiCall.get(p)
// }

function WithFetchDebounce(options = GET_CONFIG()) {
  const { Component, configs } = {
    ...GET_CONFIG(),
    ...options,
  }

  return class _withFetchDebounce extends React.Component {
    constructor(props) {
      super(props)
      this.stateAPIs = {}
      const createState = (propsKey, data) => {
        this.stateAPIs[propsKey] = {}
        const stateAPI = this.stateAPIs[propsKey]
        stateAPI.lastFetchId = 0
        stateAPI.queryManager = new QueryTableManager()
        stateAPI.API = data.API

        const rawFetchData = this.createFetchData(propsKey)
        const fetchData = debounce(rawFetchData, 800)

        const doFilter = (id, value) => {
          return new Promise(resolve => {
            stateAPI.queryManager.setFilteredValue(id, value, () => {
              fetchData(undefined, data => {
                resolve(data)
              })
            })
          })
        }
        const doFetch = beforeFetch => {
          return new Promise(resolve => {
            fetchData(beforeFetch, data => {
              resolve(data)
            })
          })
        }

        return {
          [propsKey]: {
            data: [],
            loading: false,
            fetchData,
            doFilter,
            doFetch,
          },
        }
      }

      const keys = Object.keys(configs)

      this.state = keys.reduce((acc, curVal) => {
        const curAcc = {
          ...acc,
          ...createState(curVal, configs[curVal]),
        }
        return curAcc
      }, {})

      console.log(this.state, 'state')
    }

    createFetchData = key => {
      return (beforeFetch, onFinish) => {
        const { state } = this
        const stateData = state[key]
        this.setState({ [key]: { ...stateData, data: [], loading: true } })

        const stateAPI = this.stateAPIs[key]
        const { API } = stateAPI
        const { queryManager } = stateAPI
        stateAPI.lastFetchId += 1

        const fetchId = stateAPI.lastFetchId

        if (isFunction(beforeFetch)) {
          beforeFetch(stateAPI.queryManager)
        }

        const parameters = queryString.stringify({
          ...queryManager.getStringifyQuery(),
        })
        API(`?${parameters}`)
          .then(res => {
            if (fetchId !== stateAPI.lastFetchId) {
              // for fetch callback order
              return undefined
            }

            return res.data.data
          })
          .catch(err => {
            return err
          })
          .then(dataOrError => {
            if (isError(dataOrError)) {
              const { state } = this
              const stateData = state[key]

              this.setState(
                {
                  [key]: { ...stateData, data: [], loading: false },
                },
                () => {
                  if (onFinish) {
                    onFinish([])
                  }
                }
              )
            } else if (dataOrError !== undefined) {
              const { state } = this
              const stateData = state[key]

              console.log({ stateData })

              this.setState(
                {
                  [key]: { ...stateData, data: dataOrError, loading: false },
                },
                () => {
                  if (onFinish) {
                    onFinish(dataOrError)
                  }
                }
              )
            }
          })
      }
    }

    render() {
      return <Component {...this.props} {...this.state} />
    }
  }
}

const withFetchDebounce = WithFetchDebounce

export const WithFetchDebounceProp = PropTypes.shape({
  data: PropTypes.arrayOf(PropTypes.object),
  loading: PropTypes.bool,
  fetchData: PropTypes.func,
  doFilter: PropTypes.func,
  doFetch: PropTypes.func,
})

export default withFetchDebounce
