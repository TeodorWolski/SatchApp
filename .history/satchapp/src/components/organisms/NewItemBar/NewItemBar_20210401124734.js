import React from 'react';
import styled from 'styled-components';
import Heading from 'components/atoms/Heading/Heading';
import PropTypes from 'prop-types';
import Input from 'components/atoms/Input/Input';
import Button from 'components/atoms/Button/Button';

const StyledWrapper = styled.div`
  height: 100vh;
  width: 680px;
  z-index: 9999;
  display: flex;
  flex-direction: column;
`;

const NewItemBar = ({ pageType, isVisible }) => (
  <StyledWrapper>
    <Heading>Save your video!</Heading>
  </StyledWrapper>
);

export default NewItemBar;

NewItemBar.propTypes = {
  pageType: PropTypes.oneOf(['notes', 'twitters', 'articles']).isRequired,
  isVisible: PropTypes.bool.isRequired,
};
