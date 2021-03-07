import React from 'react';
import Input from './Input';

export default {
  title: 'Components/Input',
  component: Input,
};

export const Primary = () => <Input> Close / Save </Input>;
export const Secondary = () => <Input Search> Remove </Input>;
