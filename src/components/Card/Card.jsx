import React from 'react';
import { StyledCard } from '../Styles.jsx';
import Select from '../Select/Select';
const Card = props => {
  return (
    <StyledCard>
      {props.caption.caption}
      <Select captionId={props.caption.id} />
    </StyledCard>
  );
};

export default Card;
