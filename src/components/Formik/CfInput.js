import React from 'react'
import PropTypes from 'prop-types'
import { Input, Label } from 'reactstrap'
import { requireLabel } from '../../helpers'

const CfInput = ({ label, isRequired, field, form: { touched, errors }, ...props }) => (
  <>
    <Label>
      <b>{label}</b>
      &nbsp;
      {isRequired && requireLabel()}
    </Label>
    <Input {...field} {...props} style={{ marginBottom: '10px' }} />
    {touched[field.name] && errors[field.name] && (
      <span className="form-text text-danger" style={{ paddingBottom: '10px' }}>
        {errors[field.name]}
      </span>
    )}
  </>
)

CfInput.propTypes = {
  label: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.bool,
    PropTypes.array,
    PropTypes.object,
    PropTypes.func,
  ]),
  isRequired: PropTypes.oneOfType([
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

export default CfInput
