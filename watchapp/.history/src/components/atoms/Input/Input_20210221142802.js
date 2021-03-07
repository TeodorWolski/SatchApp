import styled from 'styled-components';

const Input = styled.input`
  border-radius: 50px;
  border: none;
  font-size: 1.6rem;
  padding: 15px 30px;
  background-color: hsl(0, 0%, 96%);

  ::placeholder {
    letter-spacing: 1px;
    text-transform: uppercase;
  }
`;

export default Input;
