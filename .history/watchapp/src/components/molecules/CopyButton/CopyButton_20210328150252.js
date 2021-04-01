import React from 'react';
import styled from 'styled-components';
import CopyIcon from 'assets/icons/copy.svg';
import PropTypes from 'prop-types';
import { CopyToClipboard } from 'react-copy-to-clipboard';

const StyledWrapper = styled.div`
  height: 47px;
  width: 47px;
  border-radius: 50px;
  background-color: white;
  background-image: url(${({ icon }) => icon}) no-repeat;
  background-size: 45%;
  background-position: 50%;
`;

// background-image: white url(${({ icon }) => icon}) no-repeat;
//   background-position: 50%;
//   position: absolute;
//   display: block;
//   background-size: 45%;
//   top: 50%;
//   transform: translateY(-50%);
//   right: 100px;
//   border: none;
//   cursor: pointer;

const TrialSmtg = styled.div`
  width: 150px;
  height: 150px;
  background-color: black;
`;

const CopyButton = ({ link }) => {
  const handleCopy = () => {
    console.log('copied');
  };
  return (
    <CopyToClipboard text={link} onCopy={handleCopy}>
      <StyledWrapper icon={CopyIcon} />
    </CopyToClipboard>
  );
};

CopyButton.propTypes = {
  link: PropTypes.string.isRequired,
};

export default CopyButton;
