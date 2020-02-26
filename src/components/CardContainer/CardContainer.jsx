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
      {props.captions
        .filter(caption => {
          return caption.caption.includes(props.search);
        })
        .map(caption => {
          return (
            <Card key={caption.id} caption={caption.caption} id={caption.id} />
          );
        })}
    </div>
  );
};

CardContainer.propTypes = propTypes;

export default CardContainer;
