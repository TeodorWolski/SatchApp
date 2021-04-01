import React from 'react';
import UserTemplate from 'templates/UserTemplate';
import Heading from 'components/atoms/Heading/Heading';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import styled from 'styled-components';

const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Home = () => (
  <StyledWrapper>
    <UserTemplate>
      <Heading>Welcome to SatchApp</Heading>
      <Paragraph>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim non reprehenderit impedit
        quod repellat possimus atque nobis inventore debitis, vero magni id accusantium iste, rem
        doloremque nemo porro rerum eligendi!
      </Paragraph>
    </UserTemplate>
  </StyledWrapper>
);

export default Home;
