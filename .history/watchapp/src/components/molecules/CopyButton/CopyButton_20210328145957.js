import React from 'react';
import styled from 'styled-components';
import CopyIcon from 'assets/icons/copy.svg';
import PropTypes from 'prop-types';
import { CopyToClipboard } from 'react-copy-to-clipboard';

const StyledWrapper = styled.div`
  height: 47px;
  width: 47px;
  border-radius: 50px;
  background-color: grey;
`;

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
