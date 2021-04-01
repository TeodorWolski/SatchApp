import React from 'react';
import LinkedInIcon from 'assets/icons/linkedin.svg';
import InstagramIcon from 'assets/icons/instagram.svg';
import GithubIcon from 'assets/icons/github.svg';

import SocialMediaButton from './SocialMediaButton';

export default {
  title: 'Components/SocialMediaButton',
  component: SocialMediaButton,
};

export const LinkedIn = () => <SocialMediaButton icon={LinkedInIcon} />;
export const Github = () => <SocialMediaButton icon={GithubIcon} />;
export const Instagram = () => <SocialMediaButton icon={InstagramIcon} />;
