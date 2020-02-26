import React from 'react';
import PropTypes from 'prop-types';
import { StyledCard } from '../Styles.jsx';
import Select from '../Select/Select';

const propTypes = {
  caption: PropTypes.string.isRequired
};

const Card = props => {
  return (
    <StyledCard>
      {props.caption}
      <Select captionId={props.id} />
    </StyledCard>
  );
};

Card.propTypes = propTypes;

export default Card;
