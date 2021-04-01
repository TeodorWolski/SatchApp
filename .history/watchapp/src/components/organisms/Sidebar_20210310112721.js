import React from 'react';
import styled from 'styled-components';
import ButtonIcon from 'components/atoms/ButtonIcon/ButtonIcon';
import HomeIcon from 'assets/icons/home.svg';
import EyeIcon from 'assets/icons/eye.svg';
import { NavLink } from 'react-router-dom';
import VideosIcon from 'assets/icons/videos.svg';
import SavesIcon from 'assets/icons/saves.svg';

const StyledWrapper = styled.nav`
  position: fixed;
  height: 100vh;
  width: 150px;
  background-color: ${({ theme }) => theme.saves};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

const StyledList = styled.ul`
  list-style: none;
  margin: 10px 15px;
`;

const StyledAvatar = styled(ButtonIcon)`
  margin-top: 10%;
`;

const Sidebar = () => (
  <StyledWrapper>
    <StyledAvatar icon={EyeIcon} />
    <StyledList>
      <li>
        <ButtonIcon icon={HomeIcon} />
      </li>
      <li>
        <ButtonIcon icon={SavesIcon} />
      </li>
      <li>
        <ButtonIcon icon={VideosIcon} />
      </li>
    </StyledList>
  </StyledWrapper>
);

export default Sidebar;
