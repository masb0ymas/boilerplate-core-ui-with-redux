import React from 'react'
import PropTypes from 'prop-types'
import { Input, Label } from 'reactstrap'
import ErrorView from './ErrorView'

const CfInputRadio = ({ label, onInputChange, id, field, form: { setFieldValue }, ...props }) => {
  const handleChangeInput = e => {
    const { value } = e.currentTarget

    if (onInputChange) {
      onInputChange(field.name, value)
    }

    setFieldValue(field.name, value)
  }

  return (
    <>
      <Label check>
        <Input
          {...props}
          id={id}
          name={field.name}
          type="radio"
          onChange={e => handleChangeInput(e)}
          onBlur={field.onBlur}
          value={id}
          checked={id === field.value}
          style={{ marginBottom: '10px' }}
        />
        {label}
      </Label>

      <ErrorView name={field.name} />
    </>
  )
}

CfInputRadio.propTypes = {
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
  id: PropTypes.oneOfType([
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

export default CfInputRadio
