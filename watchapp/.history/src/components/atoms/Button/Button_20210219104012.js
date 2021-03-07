import styled, { css } from 'styled-components';

const Button = styled.button`
  display: flex;
  align-items: center;
  height: 32px;
  width: 105px;
  border-radius: 50px;
  border: none;
  font-family: Montserrat;
  text-transform: uppercase;

  ${({ secondary }) =>
    secondary &&
    css`
      background: hsl(275, 81%, 69%);
    `}
`;

export default Button;
