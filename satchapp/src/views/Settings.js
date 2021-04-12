import React from 'react';
import UserTemplate from 'templates/UserTemplate';
import styled from 'styled-components';
import SemiCard from 'components/molecules/SemiCard/SemiCard';

const StyledWrapper = styled.div`
  margin-top: 8%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Settings = () => (
  <UserTemplate pageType="settings">
    <StyledWrapper>
      <SemiCard />
    </StyledWrapper>
  </UserTemplate>
);

export default Settings;
