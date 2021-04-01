import React from 'react';
import styled from 'styled-components';
import ButtonIcon from 'components/atoms/ButtonIcon/ButtonIcon';
import HomeIcon from 'assets/icons/home.svg';
import EyeIcon from 'assets/icons/eye.svg';
import VideosIcon from 'assets/icons/videos.svg';
import SavesIcon from 'assets/icons/saves.svg';

const StyledWrapper = styled.nav`
  height: 100vh;
  width: 150px;
  background-color: ${({ theme }) => theme.saves};
  display: flex;
  flex-direction: column;
`;

const Sidebar = () => (
  <StyledWrapper>
    <ul>
      <li>
        <ButtonIcon icon={HomeIcon} />
      </li>
      <li>
        <ButtonIcon icon={SavesIcon} />
      </li>
      <li>
        <ButtonIcon icon={VideosIcon} />
      </li>
    </ul>
  </StyledWrapper>
);

export default Sidebar;
