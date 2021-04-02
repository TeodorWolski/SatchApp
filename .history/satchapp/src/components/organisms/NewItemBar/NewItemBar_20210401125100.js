import React from 'react';
import styled from 'styled-components';
import Heading from 'components/atoms/Heading/Heading';
import PropTypes from 'prop-types';
import Input from 'components/atoms/Input/Input';
import Button from 'components/atoms/Button/Button';

const StyledWrapper = styled.div`
  border-left: 10px solid ${({ theme }) => theme.saves};
  height: 100vh;
  width: 680px;
  z-index: 9999;
  padding: 100px 50px;
  position: fixed;
  background-color: white;
  box-shadow: -5px 0 15px rgba(0, 0, 0, 0.1);
  right: 0;
  top: 0;
  display: flex;
  flex-direction: column;
`;

const NewItemBar = ({ pageType, isVisible }) => (
  <StyledWrapper>
    <Heading big>Save your video!</Heading>
  </StyledWrapper>
);

export default NewItemBar;

NewItemBar.propTypes = {
  pageType: PropTypes.oneOf(['notes', 'twitters', 'articles']).isRequired,
  isVisible: PropTypes.bool.isRequired,
};
