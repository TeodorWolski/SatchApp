import React from 'react';
import PropTypes from 'prop-types';
import Sidebar from 'components/organisms/Sidebar/SidebarSide';

const UserTemplate = ({ children }) => (
  <>
    <Sidebar />
    {children}
  </>
);

UserTemplate.propTypes = {
  children: PropTypes.element.isRequired,
};

export default UserTemplate;
