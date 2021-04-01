import styled, { css } from 'styled-components';

const Heading = styled.h1`
  font-size: 2.4rem;
  font-weight: ${({ theme }) => theme.bold};
  font-family: Montserrat;

  ::first-letter {
    text-transform: capitalize;
  }

  ${({ big }) =>
    big &&
    css`
      font-size: 4rem;
    `}
`;

export default Heading;
