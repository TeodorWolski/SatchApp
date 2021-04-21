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

  @media (min-width: 350px) {
    width: 320px;
    position: relative;
    margin-top: 1px;
    right: 57%;
    margin-bottom: 40%;
  }

  @media (min-width: 370px) {
    right: 50%;
  }

  @media (min-width: 400px) {
    margin-left: 9%;
    right: 43%;
  }

  @media (min-width: 650px) {
    width: 500px;
    left: 5%;
  }

  @media (min-width: 1200px) {
    width: 70%;
    justify-content: space-between;
    margin: 10% 0 0 10%;
  }
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
