import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
  const style = {
    height: '100vh',
    width: '100vw',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#7227b0'
  };

  const style2 = {
    marginTop: '20px',
    border: '2px solid #7227b0',
    padding: '1rem'
  };

  return (
    <div style={style}>
      <h2>Oops you are on the wrong page</h2>
      <Link style={style2} to='/'>
        <h4>Caption Card</h4>
      </Link>
    </div>
  );
};

export default Error;
