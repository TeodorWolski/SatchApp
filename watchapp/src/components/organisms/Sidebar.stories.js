import React from 'react';
import { MemoryRouter } from 'react-router';
import Sidebar from './Sidebar';

export default {
  title: 'organisms/Sidebar',
  component: Sidebar,
};

export const Classic = () => (
  <MemoryRouter>
    <Sidebar />
  </MemoryRouter>
);
