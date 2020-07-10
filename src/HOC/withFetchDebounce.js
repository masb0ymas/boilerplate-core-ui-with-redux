import React from 'react'
import PropTypes from 'prop-types'
import debounce from 'lodash/debounce'
import isError from 'lodash/isError'
import isFunction from 'lodash/isFunction'
import queryString from 'query-string'
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

        const setLoading = (isLoading) => {
          this.setState((prevState) => {
            const curState = prevState[propsKey]
            return { [propsKey]: { ...curState, loading: isLoading } }
          })
        }

        const doFilter = (id, value) => {
          return new Promise((resolve) => {
            setLoading(true)
            stateAPI.queryManager.setFilteredValue(id, value, () => {
              fetchData(undefined, (data) => {
                resolve(data)
              })
            })
          })
        }
        const doFetch = (args) => {
          return new Promise((resolve) => {
            setLoading(true)
            fetchData(args, (data) => {
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
    }

    createFetchData = (key) => {
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
          .then((res) => {
            if (fetchId !== stateAPI.lastFetchId) {
              // for fetch callback order
              return undefined
            }

            return res.data
          })
          .catch((err) => {
            return err
          })
          .then((dataOrError) => {
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
              const { data, totalRow } = dataOrError

              this.setState(
                {
                  [key]: { ...stateData, data, totalRow, loading: false },
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
  data: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.object), PropTypes.object]),
  loading: PropTypes.bool,
  fetchData: PropTypes.func,
  doFilter: PropTypes.func,
  doFetch: PropTypes.func,
})

export default withFetchDebounce
