import React from 'react'
import PropTypes from 'prop-types'
import { formatYear } from '../../helpers/Date'

const DefaultFooter = (props) => {
  // eslint-disable-next-line
  const { children, ...attributes } = props

  return (
    <>
      <span>
        <a href="http://minangitcamp.com">Minang IT Camp</a>
        &nbsp;&copy;&nbsp;
        {`2017 - ${formatYear(new Date())}. `}
        All Right Reserved.&nbsp;
      </span>
      <span className="ml-auto">
        Powered by &nbsp;
        <a href="https://coreui.io/react">CoreUI for React</a>
      </span>
    </>
  )
}

DefaultFooter.propTypes = {
  children: PropTypes.node,
}

export default DefaultFooter
