import React from 'react';
import { StyledCard } from '../Styles.jsx';
const Card = props => {
  return (
    <StyledCard>
      {props.caption}
      <span>add tag</span>
    </StyledCard>
  );
};

export default Card;
