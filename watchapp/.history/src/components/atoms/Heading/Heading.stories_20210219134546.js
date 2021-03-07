import React from 'react';
import Heading from './Heading';

export default {
  title: 'Components/Heading',
  component: Heading,
};

export const Primary = () => <Heading> Close / Save </Heading>;
export const Secondary = () => <Heading secondary> Remove </Heading>;
