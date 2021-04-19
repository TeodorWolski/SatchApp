import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Heading from 'components/atoms/Heading/Heading';

const StyledWrapper = styled.div`
  width: 100%;
  height: 100vh;
  background-color: ${({ theme, activeColor }) => theme[activeColor]};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const StyledAuthCard = styled.div`
  width: 400px;
  height: 400px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 10px 20px -10px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: 415px) {
    width: 350px;
  }
`;

const StyledHeading = styled(Heading)`
  @media (max-width: 801px) {
    margin-left: 30px;
    margin-bottom: 30px;
  }
`;

const AuthTemplate = ({ children, pageType }) => (
  <StyledWrapper activeColor={pageType}>
    <StyledHeading big>Save your video and watch it later!</StyledHeading>
    <StyledAuthCard>{children}</StyledAuthCard>
  </StyledWrapper>
);

AuthTemplate.propTypes = {
  children: PropTypes.element.isRequired,
  pageType: PropTypes.oneOf(['home', 'saves', 'videos', 'geeks']).isRequired,
};

export default AuthTemplate;
