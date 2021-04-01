import React from 'react';
import Paragraph from './Paragraph';

export default {
  title: 'Components/Paragraph',
  component: Paragraph,
};

export const Classic = () => <Paragraph> Close / Save </Paragraph>;
export const Big = () => <Paragraph big> Remove </Paragraph>;
