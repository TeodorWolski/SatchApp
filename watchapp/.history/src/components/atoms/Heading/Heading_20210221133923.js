import styled from 'styled-components';

const Heading = styled.h1`
  font-size: ${({ theme, big }) => (big ? theme.fontSize.l : theme.fontSize.m)};
  font-family: Montserrat;

  ::first-letter {
    text-transform: capitalize;
  }
`;

export default Heading;
