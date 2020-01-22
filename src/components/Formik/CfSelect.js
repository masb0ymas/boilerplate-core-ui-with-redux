import React from 'react'
import Select from 'react-select'
import Async from 'react-select/async'
import PropTypes from 'prop-types'

const CfSelect = ({
  options,
  isMulti,
  isDisabled,
  field,
  form: { touched, errors, setFieldValue, setFieldTouched },
  onSelectChange,
  ...props
}) => {
  // Handle Select Multi or Single
  const handleChangeSelect = option => {
    // Return Callback
    if (onSelectChange) {
      onSelectChange(field.name, option.value)
    }
    // Handle Select
    if (isMulti) {
      setFieldValue(field.name, option)
    } else {
      setFieldValue(field.name, option.value)
    }
  }

  // Handle Value Select Multi or Single
  const handleValues = options => {
    if (isMulti) {
      return field.value
    }

    if (options) {
      return options.find(option => option.value === field.value)
    }

    return ''
  }

  const resultValue = handleValues(options)

  return (
    <>
      <Select
        {...field}
        {...props}
        isMulti={isMulti}
        options={options}
        className="basic-single"
        classNamePrefix="select"
        value={resultValue}
        onBlur={() => setFieldTouched(field.name, true)}
        onChange={option => handleChangeSelect(option)}
        isDisabled={!(options && options.length > 0) || isDisabled}
      />
      {touched[field.name] && errors[field.name] && (
        <div className="form-text text-danger" style={{ marginTop: '10px' }}>
          {errors[field.name]}
        </div>
      )}
    </>
  )
}

const CfAsyncSelect = ({
  options,
  isMulti,
  isDisabled,
  field,
  form: { touched, errors, setFieldValue, setFieldTouched },
  onSelectChange,
  ...props
}) => {
  // Handle Select Multi or Single
  const handleChangeSelect = option => {
    // Return Callback
    if (onSelectChange) {
      onSelectChange(field.name, option.value)
    }
    // Handle Select
    if (isMulti) {
      setFieldValue(field.name, option)
    } else {
      setFieldValue(field.name, option.value)
    }
  }

  // Handle Value Select Multi or Single
  const handleValues = options => {
    if (isMulti) {
      return field.value
    }

    if (options) {
      return options.find(option => option.value === field.value)
    }

    return ''
  }

  const resultValue = handleValues(options)

  return (
    <>
      <Async
        {...field}
        {...props}
        isMulti={isMulti}
        defaultOptions={options}
        className="basic-single"
        classNamePrefix="select"
        value={resultValue}
        onBlur={() => setFieldTouched(field.name, true)}
        onChange={option => handleChangeSelect(option)}
        isDisabled={!(options && options.length > 0) || isDisabled}
      />
      {touched[field.name] && errors[field.name] && (
        <div className="form-text text-danger" style={{ marginTop: '10px' }}>
          {errors[field.name]}
        </div>
      )}
    </>
  )
}

CfSelect.propTypes = {
  options: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.bool,
    PropTypes.array,
    PropTypes.object,
    PropTypes.func,
  ]),
  isMulti: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.bool,
    PropTypes.array,
    PropTypes.object,
    PropTypes.func,
  ]),
  isDisabled: PropTypes.oneOfType([
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
  onSelectChange: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.bool,
    PropTypes.array,
    PropTypes.object,
    PropTypes.func,
  ]),
}

CfAsyncSelect.propTypes = {
  options: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.bool,
    PropTypes.array,
    PropTypes.object,
    PropTypes.func,
  ]),
  isMulti: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.bool,
    PropTypes.array,
    PropTypes.object,
    PropTypes.func,
  ]),
  isDisabled: PropTypes.oneOfType([
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
  onSelectChange: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.bool,
    PropTypes.array,
    PropTypes.object,
    PropTypes.func,
  ]),
}

export { CfSelect, CfAsyncSelect }
