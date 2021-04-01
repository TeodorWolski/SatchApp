import React from 'react';
import { MemoryRouter } from 'react-router';
import Sidebar from './Sidebar';

export default {
  title: 'Components/Sidebar',
  component: Sidebar,
};

export const Primary = () => (
  <MemoryRouter>
    <Sidebar />
  </MemoryRouter>
);
