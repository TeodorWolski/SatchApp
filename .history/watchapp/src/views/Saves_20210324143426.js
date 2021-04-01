import React from 'react';
import UserTemplate from 'templates/UserTemplate';
import Card from 'components/molecules/Card/Card';
import GridTemplate from 'templates/GridTemplate';

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
    <StyledGrid>
      {dummyData.map(({ title, created, link, content }) => (
        <Card pageType="saves" link={link} title={title} created={created} content={content} />
      ))}
    </StyledGrid>
  </UserTemplate>
);

export default Saves;
