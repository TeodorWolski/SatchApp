import React from 'react';
import styled from 'styled-components';
import UserTemplate from 'templates/UserTemplate';
import UpdateEmailCard from 'components/molecules/SemiCard/UpdateEmailCard';
import UpdatePasswordCard from 'components/molecules/SemiCard/UpdatePasswordCard';

const StyledWrapper = styled.div`
  margin-top: 8%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

const Settings = () => (
  <UserTemplate pageType="settings">
    <StyledWrapper>
      <UpdateEmailCard />
      <UpdatePasswordCard />
    </StyledWrapper>
  </UserTemplate>
);

export default Settings;
