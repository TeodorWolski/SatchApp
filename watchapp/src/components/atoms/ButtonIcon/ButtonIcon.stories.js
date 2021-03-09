import React from 'react';
import HomeIcon from 'assets/icons/home.svg';
import SavesIcon from 'assets/icons/saves.svg';
import VideosIcon from 'assets/icons/videos.svg';
import ButtonIcon from './ButtonIcon';

export default {
  title: 'Components/ButtonIcon',
  component: ButtonIcon,
};

export const Home = () => <ButtonIcon icon={HomeIcon} />;
export const Saves = () => <ButtonIcon icon={SavesIcon} />;
export const Videos = () => <ButtonIcon icon={VideosIcon} />;
