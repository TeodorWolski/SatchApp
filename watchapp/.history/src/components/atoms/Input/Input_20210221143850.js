import styled, { css } from 'styled-components';
import magnifierIcon from 'assets/saves.svg';

const Input = styled.input`
  border-radius: 50px;
  border: none;
  padding: 15px 30px;
  background-color: hsl(0, 0%, 96%);

  ::placeholder {
    letter-spacing: 1px;
    text-transform: uppercase;

    ${({ search }) =>
      search &&
      css`
        background-image: url(${{ saves }});
      `}
  }
`;

export default Input;
