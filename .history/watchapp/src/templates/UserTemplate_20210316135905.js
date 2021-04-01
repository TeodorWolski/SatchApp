import React from 'react';
import PropTypes from 'prop-types';
import Sidebar from 'components/organisms/Sidebar/Sidebar';

const UserTemplate = ({ children, pageType }) => (
  <>
    <Sidebar />
    {children}
  </>
);

UserTemplate.propTypes = {
  children: PropTypes.element.isRequired,
  pageType: PropTypes.oneOf(['home', 'saves', 'videos', 'geeks']).isRequired,
};

export default UserTemplate;
