import React from 'react';
import { StyledCard } from '../Styles.jsx';
import Select from '../Select/Select';
const Card = props => {
  return (
    <StyledCard>
      {props.caption}
      <Select captionId={props.id} />
    </StyledCard>
  );
};

export default Card;
