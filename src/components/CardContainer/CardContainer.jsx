import React from 'react';
import Card from '../Card/Card';
import './CardContainer.css';
const CardContainer = props => {
  return (
    <div className='cardcontainer'>
      {props.captions.map((caption, i) => {
        if (caption.caption.includes(props.search))
          return <Card key={i} caption={caption.caption} id={caption.id} />;
      })}
    </div>
  );
};

export default CardContainer;
