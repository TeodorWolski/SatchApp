import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import ButtonIcon from 'components/atoms/ButtonIcon/ButtonIcon';
import HomeIcon from 'assets/icons/home.svg';
import forGeeks from 'assets/icons/forGeeks.svg';
import { NavLink } from 'react-router-dom';
import VideosIcon from 'assets/icons/videos.svg';
import SavesIcon from 'assets/icons/saves.svg';

const StyledWrapper = styled.nav`
  position: fixed;
  height: 100vh;
  width: 150px;
  background-color: ${({ theme, activeColor }) => theme[activeColor]};
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
  margin-top: 10vh;
`;

const StyledListItem = styled(ButtonIcon)`
  padding: 0 60px 60px 0;
  margin-top: 7vh;
`;

const Sidebar = ({ pageType }) => (
  <StyledWrapper activeColor={pageType}>
    <StyledList>
      <StyledListItem>
        <ButtonIcon icon={HomeIcon} as={NavLink} to="/" activeclass="active" />
      </StyledListItem>
      <StyledListItem>
        <ButtonIcon icon={SavesIcon} as={NavLink} to="/saves" activeclass="active" />
      </StyledListItem>
      <StyledListItem>
        <ButtonIcon icon={VideosIcon} as={NavLink} to="/videos" activeclass="active" />
      </StyledListItem>
      <StyledListItem>
        <ButtonIcon icon={forGeeks} as={NavLink} to="/forgeeks" activeclass="active" />
      </StyledListItem>
    </StyledList>
  </StyledWrapper>
);

Sidebar.propTypes = {
  pageType: PropTypes.oneOf(['home', 'saves', 'videos', 'geeks']).isRequired,
};

export default Sidebar;
