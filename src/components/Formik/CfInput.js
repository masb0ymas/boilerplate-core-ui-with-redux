import React from 'react'
import PropTypes from 'prop-types'
import { Input } from 'reactstrap'

const CfInput = ({ field, form: { touched, errors }, ...props }) => (
  <>
    <Input {...field} {...props} style={{ marginBottom: '10px' }} />
    {touched[field.name] && errors[field.name] && (
      <span className="form-text text-danger">{errors[field.name]}</span>
    )}
  </>
)

CfInput.propTypes = {
  field: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.bool,
    PropTypes.array,
    PropTypes.object,
    PropTypes.func,
  ]),
  form: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.bool,
    PropTypes.array,
    PropTypes.object,
    PropTypes.func,
  ]),
}

export default CfInput
