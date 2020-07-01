import React from 'react'
import isObject from 'lodash/isObject'
import PropTypes from 'prop-types'

export const WithToggleProps = PropTypes.shape({
  isOpen: PropTypes.bool,
  toggle: PropTypes.func,
  show: PropTypes.func,
  hide: PropTypes.func,
  prop: PropTypes.shape({
    visible: PropTypes.bool,
    onCancel: PropTypes.func,
  }),
})

const CONFIG_TOGGLE = () => {
  return {
    Component: null,
    toggles: {},
  }
}

function withToggle(configs = CONFIG_TOGGLE()) {
  const { Component, toggles } = configs

  const curToggles = isObject(toggles) ? toggles : { [toggles]: false }

  return class WithModalProps extends React.Component {
    constructor(props) {
      super(props)

      const createState = (propsKey, initProps) => {
        const extraProps = initProps === true ? { isOpen: true } : { ...initProps }
        const handleToggle = (isOpen, extraProp) => {
          const { state } = this
          const curExtraProp = extraProp || {}

          const curState = {
            ...state[propsKey],
            isOpen,
          }
          curState.prop = {
            ...curState.prop,
            ...curExtraProp,
            visible: isOpen,
          }

          this.setState({
            [propsKey]: curState,
          })
        }

        const toggle = extraProp => {
          const { state } = this
          const curState = state[propsKey]
          const { isOpen } = curState
          handleToggle(!isOpen, extraProp)
        }

        const hide = extraProp => {
          handleToggle(false, extraProp)
        }

        const show = extraProp => {
          handleToggle(true, extraProp)
        }

        return {
          [propsKey]: {
            isOpen: false,
            ...extraProps,
            prop: {
              visible: false,
              onCancel: hide,
            },
            toggle,
            hide,
            show,
          },
        }
      }

      const keys = Object.keys(curToggles)
      this.state = keys.reduce((acc, key) => {
        let curAcc = acc

        curAcc = {
          ...curAcc,
          ...createState(key, curToggles[key] || {}),
        }
        return curAcc
      }, {})
    }

    render() {
      const { state } = this

      return <Component {...this.props} {...state} />
    }
  }
}

export default withToggle
