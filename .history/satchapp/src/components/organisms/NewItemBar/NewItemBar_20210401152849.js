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
  -webkit-box-shadow: -5px 0px 15px 0px rgba(0, 0, 0, 0.1);
  box-shadow: -5px 0px 15px 0px rgba(0, 0, 0, 0.1);
  right: 0;
  top: 0;
  display: flex;
  flex-direction: column;
  transform: translate(${({ isVisible }) => (isVisible ? '0' : '100%')});
  transition: transform 0.3s ease-in-out;
`;

const StyledTextArea = styled(Input)`
  margin: 30px 0 100px;
  border-radius: 20px;
  height: 30vh;
`;

const StyledInput = styled(Input)`
  margin-top: 30px;
`;

const StyledButton = styled(Button)`
  height: 10vh;
`;

const NewItemBar = ({ isVisible, handleClose }) => (
  <StyledWrapper handleClose={handleClose} isVisible={isVisible}>
    <Heading big>Save your video!</Heading>
    <StyledInput placeholder="title" />
    <StyledInput placeholder="link" />
    <StyledTextArea placeholder="description" as="textarea" />
    <StyledButton>Save!</StyledButton>
  </StyledWrapper>
);

export default NewItemBar;

NewItemBar.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
};
