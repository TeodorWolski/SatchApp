import React from 'react';
import styled from 'styled-components';
import Heading from 'components/atoms/Heading/Heading';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import LinkIcon from 'assets/icons/link.svg';
import PropTypes from 'prop-types';

const StyledWrapper = styled.div`
  min-height: 380px;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 10px 9px 13px 0px rgba(203, 203, 203, 0.75);
  -webkit-box-shadow: 10px 9px 13px 0px rgba(203, 203, 203, 0.75);
  -moz-box-shadow: 10px 9px 13px 0px rgba(203, 203, 203, 0.75);
`;

const InnerWrapper = styled.div`
  position: relative;
  background-color: hsl(275, 81%, 69%);
  padding: 17px 30px;
`;

const StyledLinkButton = styled.a`
  height: 37px;
  width: 37px;
  border-radius: 50px;
  background: white url(${LinkIcon}) no-repeat;
  display: block;
  background-position: 50%;
`;

const Card = ({ title, content, created, link }) => (
  <StyledWrapper>
    <InnerWrapper>
      <Heading>Witaj</Heading>
      <StyledLinkButton href={link} />
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
