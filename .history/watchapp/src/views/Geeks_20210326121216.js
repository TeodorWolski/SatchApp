import React from 'react';
import UserTemplate from 'templates/UserTemplate';
import styled from 'styled-components';

const StyledGrid = styled.div`
  display: grid;
`;

const Geeks = () => <UserTemplate pageType="geeks"></UserTemplate>;

export default Geeks;
