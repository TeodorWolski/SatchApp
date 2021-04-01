import React from 'react';
import SocialMediaButton from './SocialMediaButton';

export default {
  title: 'Components/SocialMediaButton',
  component: SocialMediaButton,
};

export const Primary = () => <SocialMediaButton> Close / Save </SocialMediaButton>;
export const Secondary = () => <SocialMediaButton secondary> Remove </SocialMediaButton>;
