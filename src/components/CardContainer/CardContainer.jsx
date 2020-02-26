import React from 'react';
import PropTypes from 'prop-types';
import './CardContainer.css';
import Card from '../Card/Card';

const propTypes = {
  captions: PropTypes.array.isRequired,
  search: PropTypes.string.isRequired
};

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

CardContainer.propTypes = propTypes;

export default CardContainer;
