import React from 'react';
import Heading from './Heading';

export default {
  title: 'Components/Heading',
  component: Heading,
};

export const Classic = () => <Heading> Pozdro </Heading>;
export const Big = () => <Heading big> Remove </Heading>;
