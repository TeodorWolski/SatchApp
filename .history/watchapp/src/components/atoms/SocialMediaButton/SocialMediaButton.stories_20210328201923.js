import React from 'react';
import SocialMediaButton from './SocialMediaButton';
import LinkedInIcon from 'assets/icons/linkedin.svg';

export default {
  title: 'Components/SocialMediaButton',
  component: SocialMediaButton,
};

export const LinkedIn = () => <SocialMediaButton icon={LinkedInIcon} />;
export const Github = () => <SocialMediaButton />;
export const Instagram = () => <SocialMediaButton />;
