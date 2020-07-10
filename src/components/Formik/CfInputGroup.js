import React from 'react'
import PropTypes from 'prop-types'
import { InputGroup, InputGroupAddon, InputGroupText, Input, Label } from 'reactstrap'
import { requireLabel } from '../../helpers'

const CfInputGroup = ({
  label,
  onInputChange,
  isRequired,
  classGroup,
  classIcon,
  field,
  form: { setFieldValue, touched, errors },
  ...props
}) => {
  const handleChangeInput = (e) => {
    const { value } = e.currentTarget

    if (onInputChange) {
      onInputChange(field.name, value)
    }

    setFieldValue(field.name, value)
  }

  return (
    <>
      {label && (
        <Label>
          <b>{label}</b>
          &nbsp;
          {isRequired && requireLabel()}
        </Label>
      )}
      <InputGroup className={classGroup}>
        <InputGroupAddon addonType="prepend">
          <InputGroupText>
            <i className={classIcon} />
          </InputGroupText>
        </InputGroupAddon>
        <Input {...field} {...props} onChange={(e) => handleChangeInput(e)} />
      </InputGroup>

      {touched[field.name] && errors[field.name] && (
        <span className="form-text text-danger">{errors[field.name]}</span>
      )}
    </>
  )
}

CfInputGroup.propTypes = {
  label: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.bool,
    PropTypes.array,
    PropTypes.object,
    PropTypes.func,
  ]),
  onInputChange: PropTypes.oneOfType([
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
  classGroup: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.bool,
    PropTypes.array,
    PropTypes.object,
    PropTypes.func,
  ]),
  classIcon: PropTypes.oneOfType([
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

export default CfInputGroup
