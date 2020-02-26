import React from 'react';
import PropTypes from 'prop-types';
import Loader from 'react-loader-spinner';

const propTypes = {
  small: PropTypes.bool
};

const defaultProps = {
  small: false
};

const Spinner = ({ small }) => {
  const style = {
    display: 'flex',
    justifyContent: 'center'
  };

  return (
    <div style={style}>
      <Loader
        type='ThreeDots'
        color={small ? 'white' : '#7227b0'}
        height={small ? 20 : 100}
        width={small ? 20 : 100}
      />
    </div>
  );
};

Spinner.propTypes = propTypes;
Spinner.defaultProps = defaultProps;

export default Spinner;
