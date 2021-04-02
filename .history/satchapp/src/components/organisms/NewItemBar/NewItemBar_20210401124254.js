import React from 'react';
import styled from 'styled-components';
import Heading from 'components/atoms/Heading/Heading';
import PropTypes from 'prop-types';
import Input from 'components/atoms/Input/Input';
import Button from 'components/atoms/Button/Button';

const StyledWrapper = styled.div`
  height: 1050px;
  width: 650px;
  z-index: 9999;
  display: flex;
  flex-direction: column;
`;

const NewItemBar = ({ pageType, isVisible }) => (
  <StyledWrapper>
    <></>
  </StyledWrapper>
);

NewItemBar.propTypes = {
  pageContext: PropTypes.oneOf(['notes', 'twitters', 'articles']),
  isVisible: PropTypes.bool.isRequired,
};
