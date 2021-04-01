import React from 'react';
import UserTemplate from 'templates/UserTemplate';
import Heading from 'components/atoms/Heading/Heading';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import styled from 'styled-components';

const StyledWrapper = styled.div`
  grid-template-rows: repeat(3, 1fr);
`;

const StyledParagraph = styled(Paragraph)`
  font-size: ${({ theme }) => theme.fontSize.l};
`;

const Home = () => (
  <StyledWrapper>
    <UserTemplate pageType="home">
      <Heading>Welcome to SatchApp</Heading>
      <StyledParagraph>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim non reprehenderit impedit
        quod repellat possimus atque nobis inventore debitis, vero magni id accusantium iste, rem
        doloremque nemo porro rerum eligendi! Lorem, ipsum dolor sit amet consectetur adipisicing
        elit. Enim non reprehenderit impedit quod repellat possimus atque nobis inventore debitis,
        vero magni id accusantium iste, rem doloremque nemo porro rerum eligendi! Lorem, ipsum dolor
        sit amet consectetur adipisicing elit. Enim non reprehenderit impedit quod repellat possimus
        atque nobis inventore debitis, vero magni id accusantium iste, rem doloremque nemo porro
        rerum eligendi!
      </StyledParagraph>
    </UserTemplate>
  </StyledWrapper>
);

export default Home;
