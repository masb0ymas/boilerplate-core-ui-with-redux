import React from 'react'
import Select from 'react-select'
import PropTypes from 'prop-types'

const CfSelect = ({
  options,
  field,
  form: { touched, errors, setFieldValue, setFieldTouched },
  onSelectChange,
  ...props
}) => (
  <>
    <Select
      {...field}
      {...props}
      options={options}
      className="basic-single"
      classNamePrefix="select"
      value={options ? options.find(option => option.value === field.value) : ''}
      onBlur={() => setFieldTouched(field.name, true)}
      onChange={option => {
        if (onSelectChange) {
          onSelectChange(field.name, option.value)
        }
        setFieldValue(field.name, option.value)
      }}
      isDisabled={!(options && options.length > 0)}
    />
    {touched[field.name] && errors[field.name] && (
      <div className="form-text text-danger" style={{ marginTop: '10px' }}>
        {errors[field.name]}
      </div>
    )}
  </>
)

CfSelect.propTypes = {
  options: PropTypes.oneOfType([
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

export default CfSelect
