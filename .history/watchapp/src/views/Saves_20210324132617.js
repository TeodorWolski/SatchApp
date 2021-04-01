import React from 'react';
import UserTemplate from 'templates/UserTemplate';
import Card from 'components/molecules/Card/Card';

const dummyData = [
  {
    ex1: {
      title: 'Hello meow',
      created: '18 may 2018',
      link: 'https://www.youtube.com/watch?v=-QmyosHh-kU',
      content: 'Nowy film gargamela!',
    },
    ex2: {
      title: 'Hello meow',
      created: '18 may 2018',
      link: 'https://www.youtube.com/watch?v=-QmyosHa-kU',
      content: 'Nowy film!',
    },
    ex3: {
      title: 'Hello meow',
      created: '18 may 2018',
      link: 'https://www.youtube.com/watch?v=-QmyosHy-kU',
      content: 'Nowy film gorgonzoli!',
    },
  },
];

const Saves = () => (
  <UserTemplate pageType="saves">
    {dummyData.map(({ title, created, pageType, content }) => (
      <Card pageType={pageType} title={title} created={created} content={content} />
    ))}
  </UserTemplate>
);

export default Saves;
