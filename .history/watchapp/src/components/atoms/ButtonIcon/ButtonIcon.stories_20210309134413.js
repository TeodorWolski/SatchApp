import React from 'react';
import styled from 'styled-components';
import HomeIcon from 'assets/icons/home.svg';
import SavesIcon from 'assets/icons/saves.svg';
import VideosIcon from 'assets/icons/videos.svg';
import ButtonIcon from './ButtonIcon';

export default {
  title: 'Components/ButtonIcon',
  component: ButtonIcon,
  decorators: [
  (Story) => (
    <SavesBackground>
      <Story />
    </SavesBackground>
  ),
];
};

const SavesBackground = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.saves};
  height: 500px;
  width: 500px;
`;

export const 

export const Home = () => <ButtonIcon icon={HomeIcon} />;
export const Saves = () => <ButtonIcon icon={SavesIcon} />;
export const Videos = () => <ButtonIcon icon={VideosIcon} activeclass="active" />;
