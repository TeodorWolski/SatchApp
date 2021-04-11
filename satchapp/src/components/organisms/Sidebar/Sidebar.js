import React, { useState } from 'react';
import { useAuth } from 'context/AuthContext';
import styled from 'styled-components';
import { routes } from 'routes';
import PropTypes from 'prop-types';
import ButtonIcon from 'components/atoms/ButtonIcon/ButtonIcon';
import HomeIcon from 'assets/icons/home.svg';
import forGeeks from 'assets/icons/forGeeks.svg';
import { NavLink, useHistory } from 'react-router-dom';
import VideosIcon from 'assets/icons/videos.svg';
import SavesIcon from 'assets/icons/saves.svg';
import LogoutIcon from 'assets/icons/logout.svg';
import SettingsIcon from 'assets/icons/settings.svg';

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
  position: relative;
  bottom: 5%;
  list-style: none;
  padding: 0;
  @media (max-width: 801px) {
    margin-top: 3vh;
  }
`;

const StyledListItem = styled(ButtonIcon)`
  padding: 0 60px 60px 0;
  margin-top: 7vh;
`;

const Sidebar = ({ pageType }) => {
  const [error, setError] = useState('');
  const { logout } = useAuth();
  const history = useHistory();

  const handleLogout = async () => {
    setError('');

    try {
      await logout();
      history.push(routes.login);
    } catch {
      setError('Failed to log out');
    }
  };

  return (
    <StyledWrapper activeColor={pageType}>
      <StyledList>
        <StyledListItem>
          <ButtonIcon icon={HomeIcon} as={NavLink} to="/home" activeclass="active" />
        </StyledListItem>
        <StyledListItem>
          <ButtonIcon icon={SavesIcon} as={NavLink} to="/saves" activeclass="active" />
        </StyledListItem>
        <StyledListItem>
          <ButtonIcon icon={VideosIcon} as={NavLink} to="/videos" activeclass="active" />
        </StyledListItem>
        <StyledListItem>
          <ButtonIcon icon={SettingsIcon} as={NavLink} to="/settings" activeclass="active" />
        </StyledListItem>
        <StyledListItem>
          <ButtonIcon icon={forGeeks} as={NavLink} to="/forgeeks" activeclass="active" />
        </StyledListItem>
      </StyledList>
      <ButtonIcon icon={LogoutIcon} onClick={handleLogout} />
    </StyledWrapper>
  );
};

Sidebar.propTypes = {
  pageType: PropTypes.oneOf(['home', 'saves', 'videos', 'geeks']).isRequired,
};

export default Sidebar;
