import React, { useEffect } from 'react';
import Card from '../Card/Card';

const CardContainer = props => {
  return (
    <div className='cardcontainer'>
      {props.captions.map((caption, i) => {
        if (caption.caption.includes(props.search))
          return <Card key={i} caption={caption.caption} />;
      })}
    </div>
  );
};

export default CardContainer;
