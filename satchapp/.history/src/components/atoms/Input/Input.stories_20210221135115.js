import React from 'react';
import Input from './Input';

export default {
  title: 'Components/Input',
  component: Input,
};

export const Primary = () => <Input placeholder="login" />;
export const Secondary = () => <Input placeholder="search" Search />;
