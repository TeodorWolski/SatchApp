import React from 'react';
import Button from './Button';

export default {
  title: 'Components/Button',
  component: Button,
};

export const Primary = () => <Button> Close / Save </Button>;
export const Secondary = () => <Button secondary> Close / Save </Button>;
