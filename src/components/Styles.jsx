import styled from 'styled-components';

const Btn = styled.button`
  background-color: ${props => (props.clr ? '#efe6f6' : '#7227b0')};
  color: ${props => (props.clr ? '#7227b0' : 'white')};
  border-radius: 5px;
  border: ${props => (props.clr ? '#7227b0 1px solid' : 'none')};
  padding: 0.5rem;
  margin: 10px;
  outline: none;
  cursor: pointer;
  transition-duration: 0.5s;
  transition-timing-function: ease;
  transition-property: background-color;
  &:hover {
    background-color: ${props => (props.clr ? '' : '#ff5722')};
  }
`;
const StyledCard = styled.div`
  max-width: 250px;
  border: 1px solid #7227b0;
  color: #7227b0;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  margin: 1rem;
  transition-duration: 0.5s;
  transition-timing-function: ease-in-out;
  transition-property: transform;
  &:hover {
    transform: scale(1.1);
  }
`;
export { Btn, StyledCard };
