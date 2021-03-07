import React from 'react';
import Paragraph from './Paragraph';

export default {
  title: 'Components/Paragraph',
  component: Paragraph,
};

export const Primary = () => <Paragraph> Close / Save </Paragraph>;
export const Secondary = () => <Paragraph secondary> Remove </Paragraph>;
