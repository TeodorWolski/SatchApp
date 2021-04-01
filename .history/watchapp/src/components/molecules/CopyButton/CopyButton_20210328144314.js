import React from 'react';
import styled, { css } from 'styled-components';
import CopyIcon from 'assets/icons/copy.svg';
import PropTypes from 'prop-types';
import { CopyToClipboard } from 'react-copy-to-clipboard';

// const StyledCopyButton = styled.button`
//   height: 47px;
//   width: 47px;
//   border-radius: 50px;
//   background-image: white url(${({ icon }) => icon}) no-repeat;
//   background-position: 50%;
//   position: absolute;
//   display: block;
//   background-size: 45%;
//   top: 50%;
//   transform: translateY(-50%);
//   right: 100px;
//   border: none;
//   cursor: pointer;
// `;

const TrialSmtg = styled.div`
  width: 150px;
  height: 150px;
  background-color: black;
`;

const CopyButton = ({ link }) => (
  <CopyToClipboard text={link}>
    <TrialSmtg />
  </CopyToClipboard>
);

CopyButton.propTypes = {
  link: PropTypes.string.isRequired,
};

export default CopyButton;
