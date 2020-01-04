import React from 'react'
import PropTypes from 'prop-types'
import { InputGroup, InputGroupAddon, InputGroupText, Input } from 'reactstrap'

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

export default CfInputGroup
