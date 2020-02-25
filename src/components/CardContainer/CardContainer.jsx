import React, { useEffect } from 'react';
import Card from '../Card/Card';

const CardContainer = props => {
  return (
    <div className='cardcontainer'>
      {props.captions.map(caption => {
        return <div>{caption.caption}</div>;
      })}
    </div>
  );
};

export default CardContainer;
