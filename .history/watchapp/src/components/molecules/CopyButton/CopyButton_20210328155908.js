import React, { useState } from 'react';
import styled from 'styled-components';
import CopyIcon from 'assets/icons/copy.svg';
import PropTypes from 'prop-types';
import { CopyToClipboard } from 'react-copy-to-clipboard';

const StyledButton = styled.div`
  position: absolute;
  height: 47px;
  width: 47px;
  border-radius: 50px;
  background: white url(${({ icon }) => icon}) no-repeat;
  background-size: 45%;
  background-position: 50%;
  top: 50%;
  right: 100px;
  border: none;
  cursor: pointer;
  transform: translateY(-50%);
`;

const CopyButton = ({ videoLink }) => {
  const [copied, copyChange] = useState(false);

  const handleCopy = () => {
    copyChange(true);
  };

  return (
    <CopyToClipboard text={videoLink} onCopy={handleCopy}>
      <StyledButton icon={CopyIcon} />
      {copied === true && <small>copied!</small>}
    </CopyToClipboard>
  );
};

CopyButton.propTypes = {
  videoLink: PropTypes.string.isRequired,
};

export default CopyButton;
