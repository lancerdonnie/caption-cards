import React, { useEffect } from 'react';
import Card from '../Card/Card';

const CardContainer = props => {
  useEffect(() => {
    console.log(props.captionsUnderTag);
  });
  return (
    <div className='cardcontainer'>
      {!props.captionsUnderTag &&
        props.captions.map(caption => {
          return <div>{caption.caption}</div>;
        })}
      <br />
      {props.captionsUnderTag &&
        props.captionsUnderTag.captions.map(caption => {
          return <div>{caption}</div>;
        })}
    </div>
  );
};

export default CardContainer;
