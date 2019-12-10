import React from 'react'
import Select from 'react-select'
import PropTypes from 'prop-types'
import { Input, InputGroup, InputGroupAddon, InputGroupText } from 'reactstrap'

const CfInput = ({ field, form: { touched, errors }, ...props }) => (
  <>
    <Input {...field} {...props} style={{ marginBottom: '10px' }} />
    {touched[field.name] && errors[field.name] && (
      <span className="form-text text-danger">{errors[field.name]}</span>
    )}
  </>
)

const CfInputGroup = ({ classGroup, classIcon, field, form: { touched, errors }, ...props }) => (
  <>
    <InputGroup className={classGroup}>
      <InputGroupAddon addonType="prepend">
        <InputGroupText>
          <i className={classIcon} />
        </InputGroupText>
      </InputGroupAddon>
      <Input {...field} {...props} />
    </InputGroup>
    {touched[field.name] && errors[field.name] && (
      <span className="form-text text-danger" style={{ marginTop: '-10px', paddingBottom: '10px' }}>
        {errors[field.name]}
      </span>
    )}
  </>
)

const CfSelect = ({
  options,
  field,
  form: { touched, errors, setFieldValue },
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
      onChange={option => {
        if (onSelectChange) {
          onSelectChange(field.name, option.value)
        }
        setFieldValue(field.name, option.value)
      }}
      onBlur={option => {
        if (onSelectChange) {
          onSelectChange(field.name, option.value)
        }
        setFieldValue(field.name, option.value)
      }}
      isDisabled={!(options && options.length > 0)}
    />
    {touched[field.name] && errors[field.name] && (
      <div className="form-text text-danger">{errors[field.name]}</div>
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

CfInputGroup.propTypes = {
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

export { CfInput, CfInputGroup, CfSelect }
