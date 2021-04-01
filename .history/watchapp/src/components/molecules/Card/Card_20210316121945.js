import React from 'react';
import styled, { css } from 'styled-components';
import Heading from 'components/atoms/Heading/Heading';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import LinkIcon from 'assets/icons/link.svg';
import CopyIcon from 'assets/icons/copy.svg';
import PropTypes from 'prop-types';
import Button from 'components/atoms/Button/Button';

const StyledWrapper = styled.div`
  min-height: 380px;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 10px 9px 13px 0px rgba(203, 203, 203, 0.75);
  -webkit-box-shadow: 10px 9px 13px 0px rgba(203, 203, 203, 0.75);
  -moz-box-shadow: 10px 9px 13px 0px rgba(203, 203, 203, 0.75);
`;

const InnerWrapper = styled.div`
  background-color: ${({ theme }) => theme.saves};
  padding: 17px 30px;

  ::first-of-type {
    z-index: 9999;
  }

  ${({ flex }) =>
    flex &&
    css`
      background: white;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    `}
`;

const StyledLinkButton = styled.a`
  height: 47px;
  width: 47px;
  border-radius: 50px;
  background: white url(${({ icon }) => icon}) no-repeat;
  display: block;
  background-position: 50%;
  background-size: 60%;
  position: absolute;
  transform: translateY(-50%);
  right: 30px;
  top: 50%;
  cursor: pointer;
`;

const DateInfo = styled(Paragraph)`
  margin: 0 0 5px;
  font-weight: ${({ theme }) => theme.bold};
  font-size: ${({ theme }) => theme.fontSize.xs};
`;

const StyledCopyButton = styled.button`
  height: 47px;
  width: 47px;
  border-radius: 50px;
  background: white url(${({ icon }) => icon}) no-repeat;
  background-position: 50%;
  position: absolute;
  display: block;
  background-size: 45%;
  top: 50%;
  transform: translateY(-50%);
  right: 100px;
  border: none;
  cursor: pointer;
`;

const StyledButton = styled(Button)`
  margin-top: 170px;
`;

const Card = ({ title, content, created, link }) => (
  <StyledWrapper>
    <InnerWrapper>
      <Heading>{title}</Heading>
      <DateInfo>{created}</DateInfo>
      <StyledLinkButton icon={LinkIcon} href={link} />
      <StyledCopyButton icon={CopyIcon} />
    </InnerWrapper>
    <InnerWrapper flex>
      <Paragraph>{content}</Paragraph>
      <StyledButton secondary>Remove</StyledButton>
    </InnerWrapper>
  </StyledWrapper>
);

Card.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  created: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default Card;
