import React from 'react';
import UserTemplate from 'templates/UserTemplate';
import Card from 'components/molecules/Card/Card';

const About = [
  {
    title: 'Welcome to SatchApp',
    content:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim non reprehenderit impedit quod repellat possimus atque nobis inventore debitis, vero magni id accusantium iste, rem doloremque nemo porro rerum eligendi!',
  },
];

const Home = () => (
  <UserTemplate>
    {About.map((item) => (
      <Card title={item.title} content={item.content} />
    ))}
  </UserTemplate>
);

export default Home;
