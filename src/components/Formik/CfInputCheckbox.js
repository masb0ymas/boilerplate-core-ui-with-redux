import React from 'react';
import PropTypes from 'prop-types';
import { Input } from 'reactstrap';
import ErrorView from './ErrorView';

const CfInputCheckbox = ({ label, field, form, ...props }) => (
  <>
    <Input
      {...field}
      {...props}
      checked={field.value ? field.value : false}
      type="checkbox"
      style={{ marginBottom: '10px' }}
    />
    {label}

    <ErrorView name={field.name} />
  </>
);

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
};

export default CfInputCheckbox;
