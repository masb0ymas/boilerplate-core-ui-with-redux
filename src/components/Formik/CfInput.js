import React from 'react'
import PropTypes from 'prop-types'
import { Input, Label } from 'reactstrap'
import { requireLabel } from '../../helpers'
import ErrorView from './ErrorView'

const CfInput = ({ label, isRequired, field, form, ...props }) => (
  <>
    <Label>
      <b>{label}</b>
      &nbsp;
      {isRequired && requireLabel()}
    </Label>
    <Input {...field} {...props} />
    <ErrorView name={field.name} />
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
