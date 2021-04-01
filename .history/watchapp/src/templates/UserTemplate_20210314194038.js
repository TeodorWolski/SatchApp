import React from 'react';
import PropTypes from 'prop-types';
import Sidebar from 'components/organisms/Sidebar';

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
