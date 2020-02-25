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
`;
const StyledCard = styled.div`
  max-width: 250px;
  /* height: 100px; */
  border: 1px solid #7227b0;
  /* background: hsl(120, 100%, 93%); */
  color: #7227b0;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 2rem;
  margin: 1rem;
`;
export { Btn, StyledCard };
