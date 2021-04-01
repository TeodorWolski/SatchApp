import React from 'react';
import UserTemplate from 'templates/UserTemplate';
import Card from 'components/molecules/Card/Card';

const About = [
  {
    title: 'Welcome to SatchApp',
    content: 'In this app you can save some video and watch it here!',
  },
];

const Home = () => (
  <UserTemplate>
    {About.map((item) => (
      <Card />
    ))}
  </UserTemplate>
);

export default Home;
