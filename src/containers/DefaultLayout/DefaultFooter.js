import React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';
import 'moment/locale/id';

moment.locale('id');

const DefaultFooter = props => {
  // eslint-disable-next-line
  const { children, ...attributes } = props
  const Year = moment().format('YYYY');

  return (
    <>
      <span>
        <a href="http://minangitcamp.com">Minang IT Camp</a>
        &nbsp;&copy;&nbsp;
        {`2017 - ${Year}. `}
        All Right Reserved.&nbsp;
      </span>
      <span className="ml-auto">
        Powered by &nbsp;
        <a href="https://coreui.io/react">CoreUI for React</a>
      </span>
    </>
  );
};

DefaultFooter.propTypes = {
  children: PropTypes.node,
};

export default DefaultFooter;
