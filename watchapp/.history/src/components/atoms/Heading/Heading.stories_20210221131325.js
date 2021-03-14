import React from 'react';
import Heading from './Heading';

export default {
  title: 'Components/Heading',
  component: Heading,
};

export const Classic = () => <Heading> Close / Save </Heading>;
export const Big = () => <Heading secondary> Remove </Heading>;
