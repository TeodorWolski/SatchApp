import React from 'react';
import styled, { css } from 'styled-components';
import Heading from 'components/atoms/Heading/Heading';
import Input from 'components/atoms/Input/Input';
import Button from 'components/atoms/Button/Button';

const StyledWrapper = styled.div`
  position: absolute;
  height: 700px;
  width: 700px;
  border-radius: 10px;
  overflow: hidden;
  display: grid;
  position: relative;
  grid-template-rows: 0.25fr 1fr;
  box-shadow: 10px 9px 13px 0px rgba(203, 203, 203, 0.75);
  -webkit-box-shadow: 10px 9px 13px 0px rgba(203, 203, 203, 0.75);
  -moz-box-shadow: 10px 9px 13px 0px rgba(203, 203, 203, 0.75);

  @media (max-width: 1750px) {
    height: 100%;
  }
`;

const InnerWrapper = styled.div`
  padding: 35px 30px;
  position: relative;
  background-color: ${({ theme }) => theme.settings};
  text-align: center;

  :first-of-type {
    z-index: 9999;
  }

  ${({ flex }) =>
    flex &&
    css`
      background-color: white;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    `}
`;

const StyledHeading = styled(Heading)`
  margin: 5px 0 0;
  display: block;
  font-weight: ${({ theme }) => theme.bold};
`;

const StyledButton = styled(Button)`
  position: relative;
  background-color: ${({ theme }) => theme.settings};
  left: 30%;
`;

const StyledInput = styled(Input)`
  margin-bottom: 50px;
`;

const SemiCard = () => (
  <StyledWrapper>
    <InnerWrapper>
      <StyledHeading big>Update your profile</StyledHeading>
    </InnerWrapper>
    <InnerWrapper flex>
      <StyledInput placeholder="e-mail" />
      <StyledInput placeholder="password" />
      <StyledInput placeholder="re-type password" />
      <StyledButton type="submit">Submit</StyledButton>
    </InnerWrapper>
  </StyledWrapper>
);

export default SemiCard;
