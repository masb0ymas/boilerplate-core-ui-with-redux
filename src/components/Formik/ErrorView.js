/* eslint-disable react/prop-types */
import React from 'react';
import { connect, getIn } from 'formik';
import { get } from 'lodash';
import CastPath from '../../utils/CastPath';

function isString(str) {
  return typeof str === 'string' || str instanceof String;
}

function isTouch(props) {
  const touch = getIn(props.formik.touched, props.name);
  if (touch === undefined) {
    const path = CastPath.stringToPath(props.name);
    if (path.length >= 3) {
      const pathArray = path.slice(0, path.length - 2);
      const pathBoolean = path.slice(0, path.length - 1);
      const isArrayValue = Array.isArray(get(props.formik.touched, pathArray.join('.'), null));
      if (isArrayValue) {
        return getIn(props.formik.touched, pathBoolean);
      }
    }
  }
  return touch;
}

function ErrorView(props) {
  const { name, formik } = props;
  const error = getIn(formik.errors, name);
  const touch = isTouch(props);
  if (!isString(error)) {
    return <></>;
  }

  return (
    <span className="form-text text-danger" style={{ paddingBottom: '5px' }}>
      {error && touch ? error : null}
    </span>
  );
}

export default connect(ErrorView);
