import styled, { css } from 'styled-components';

const Heading = styled.h1`
  font-size: 24;
  font-weight: Semibold;
  font-family: Montserrat;

  ::first-letter {
    text-transform: capitalize;
  }

  ${({ big }) =>
    big &&
    css`
      font-size: 40px;
    `}
`;

export default Heading;
