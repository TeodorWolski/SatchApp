import React from 'react';
import PropTypes from 'prop-types';
import Sidebar from 'components/organisms/Sidebar';

const UserTemplate = ({children}) => (
    <Sidebar />
    {children}
);

export default UserTemplate;