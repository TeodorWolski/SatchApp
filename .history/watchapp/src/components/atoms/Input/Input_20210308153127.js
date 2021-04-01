import styled, { css } from 'styled-components';
import magnifierIcon from 'assets/icons/magnifier.svg';

const Input = styled.input`
  border-radius: 50px;
  border: none;
  padding: 15px 30px;
  background-color: hsl(0, 0%, 96%);

  ::placeholder {
    letter-spacing: 1px;
    text-transform: uppercase;
  }

  ${({ search }) =>
    search &&
    css`
      background-size: 15px;
      padding: 10px 20px 10px 40px;
      font-size: ${({ theme }) => theme.fontSize.xs}
      background-position: 15px;
      background-image: url(${magnifierIcon});
      background-repeat: no-repeat;
    `}
`;

export default Input;
