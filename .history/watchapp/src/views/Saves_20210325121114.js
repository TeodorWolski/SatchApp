import React from 'react';
import UserTemplate from 'templates/UserTemplate';
import Card from 'components/molecules/Card/Card';
import styled from 'styled-components';
import Input from 'components/atoms/Input/Input';
import Heading from 'components/atoms/Heading/Heading';

const StyledGrid = styled.div`
  display: grid;
  grid-gap: 85px;

  @media (min-width: 375px) {
    grid-template-columns: 1fr;
    margin-left: 40px;
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1350px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const StyledHeading = styled(Heading)`
  margin: 50px 0 50px 0;

  @media (max-width: 1024px) {
    text-align: center;
    margin-left: 50px;
  }
`;

const StyledWrapper = styled.div`
  position: relative;
  padding: 25px 150px 25px 70px;
`;

const dummyData = [
  {
    title: 'Hello meow',
    created: '18 may 2018',
    link: 'https://www.youtube.com/watch?v=-QmyosHh-kU',
    content: 'Nowy film gargamela!',
  },
  {
    title: 'Hello meow',
    created: '18 may 2018',
    link: 'https://www.youtube.com/watch?v=-QmyosHa-kU',
    content: 'Nowy film!',
  },
  {
    title: 'Hello meow',
    created: '18 may 2018',
    link: 'https://www.youtube.com/watch?v=-QmyosHy-kU',
    content: 'Nowy film gorgonzoli!',
  },
  {
    title: 'Hello meow',
    created: '18 may 2018',
    link: 'https://www.youtube.com/watch?v=-QmyosHy-kU',
    content: 'Nowy film gorgonzoli!',
  },
  {
    title: 'Hello meow',
    created: '18 may 2018',
    link: 'https://www.youtube.com/watch?v=-QmyosHy-kU',
    content: 'Nowy film gorgonzoli!',
  },
];

const Saves = () => (
  <UserTemplate pageType="saves">
    <StyledWrapper>
      <Input placeholder="Search" search />
      <StyledHeading big as="h1">
        Save some videos to watch them later!
      </StyledHeading>
      <StyledGrid>
        {dummyData.map(({ title, created, link, content }) => (
          <Card pageType="saves" link={link} title={title} created={created} content={content} />
        ))}
      </StyledGrid>
    </StyledWrapper>
  </UserTemplate>
);

export default Saves;
