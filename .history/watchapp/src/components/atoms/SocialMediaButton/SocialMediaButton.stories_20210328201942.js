import React from 'react';
import LinkedInIcon from 'assets/icons/linkedin.svg';
import SocialMediaButton from './SocialMediaButton';

export default {
  title: 'Components/SocialMediaButton',
  component: SocialMediaButton,
};

export const LinkedIn = () => <SocialMediaButton icon={LinkedInIcon} />;
export const Github = () => <SocialMediaButton />;
export const Instagram = () => <SocialMediaButton />;
