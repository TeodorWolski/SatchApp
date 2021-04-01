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
  top: 0;
  left: 0;
  padding: 25px 0;
`;

const StyledList = styled.ul`
  list-style: none;
  padding: 0;
  margin-bottom: 40vh;
`;

const StyledAvatar = styled(ButtonIcon)`
  margin-top: 10%;
  display: block;
`;

const StyledListItem = styled(ButtonIcon)`
  margin-bottom: 5px;
`;

const Sidebar = () => (
  <StyledWrapper>
    <StyledAvatar icon={EyeIcon} />
    <StyledList>
      <StyledListItem>
        <ButtonIcon icon={HomeIcon} />
      </StyledListItem>
      <StyledListItem>
        <ButtonIcon icon={SavesIcon} activeclass="active" />
      </StyledListItem>
      <StyledListItem>
        <ButtonIcon icon={VideosIcon} />
      </StyledListItem>
    </StyledList>
  </StyledWrapper>
);

export default Sidebar;
