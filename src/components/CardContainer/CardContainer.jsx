import React from 'react';
import Card from '../Card/Card';

const CardContainer = () => {
  return <div className='cardcontainer'>{Array(20).fill(<Card />)}</div>;
};

export default CardContainer;
