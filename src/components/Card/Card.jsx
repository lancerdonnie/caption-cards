import React from 'react';
import styled from 'styled-components';

const Card = () => {
  const StyledCard = styled.div`
    max-width: 250px;
    /* height: 100px; */
    border: 1px solid #00c642;
    background: hsl(120, 100%, 93%);
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 2rem;
    margin: 1rem;
  `;
  return (
    <StyledCard>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure ducimus
      <span>add tag</span>
    </StyledCard>
  );
};

export default Card;
