import React from 'react';
import ButtonIcon from './ButtonIcon';
import HomeIcon from 'assets/icon/home.svg';
import SavesIcon from 'assets/icon/saves.svg';
import HomeIcon from 'assets/icon/home.svg';

export default {
  title: 'Components/ButtonIcon',
  component: ButtonIcon,
};

export const Home = () => <ButtonIcon icon={HomeIcon} />;
export const Saves = () => <ButtonIcon icon={} />;
export const Videos = () => <ButtonIcon />;
