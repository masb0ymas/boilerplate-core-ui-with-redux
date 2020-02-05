import React from 'react'
import PropTypes from 'prop-types'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { Input, Label } from 'reactstrap'
import moment from 'moment'
import 'moment/locale/id'
import { requireLabel } from '../../helpers'
import ErrorView from './ErrorView'

moment.locale('id')

const DateCustomInput = ({ value, onClick, ...props }) => (
  <Input
    {...props}
    value={value ? moment(value).format('DD MMMM YYYY') : undefined}
    onClick={onClick}
    // style={{ marginBottom: '10px', display: 'block' }}
  />
)

const CfInputDate = ({
  label,
  isRequired,
  field,
  form: { setFieldValue, setFieldTouched },
  placeholder,
  ...props
}) => {
  return (
    <>
      <Label>
        <b>{label}</b>
        &nbsp;
        {isRequired && requireLabel()}
      </Label>
      <DatePicker
        dateFormat="MM/dd/yyyy"
        dropdownMode="select"
        showYearDropdown
        showMonthDropdown
        selected={field.value ? new Date(field.value) : null}
        onChange={date => setFieldValue(field.name, date)}
        onBlur={() => setFieldTouched(field.name, true)}
        placeholderText={placeholder}
        customInput={<DateCustomInput {...field} {...props} />}
      />
      <ErrorView name={field.name} />
    </>
  )
}

CfInputDate.propTypes = {
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
  placeholder: PropTypes.oneOfType([
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

DateCustomInput.propTypes = {
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.bool,
    PropTypes.array,
    PropTypes.object,
    PropTypes.func,
  ]),
  onClick: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.bool,
    PropTypes.array,
    PropTypes.object,
    PropTypes.func,
  ]),
}

export default CfInputDate
