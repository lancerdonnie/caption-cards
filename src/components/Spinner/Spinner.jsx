import Loader from 'react-loader-spinner';
import React from 'react';

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

export default Spinner;
