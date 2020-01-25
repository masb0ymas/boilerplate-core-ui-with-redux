import React from 'react'
import PropTypes from 'prop-types'
import { Input } from 'reactstrap'

const CfInputCheckbox = ({ label, field, form: { touched, errors }, ...props }) => (
  <>
    <Input
      {...field}
      {...props}
      checked={field.value ? field.value : false}
      type="checkbox"
      style={{ marginBottom: '10px' }}
    />
    {label}

    {touched[field.name] && errors[field.name] && (
      <span className="form-text text-danger" style={{ paddingBottom: '10px' }}>
        {errors[field.name]}
      </span>
    )}
  </>
)

CfInputCheckbox.propTypes = {
  label: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.bool,
    PropTypes.array,
    PropTypes.object,
    PropTypes.func,
  ]),
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

export default CfInputCheckbox
