import React from 'react';
import styled from 'styled-components';
import Heading from 'components/atoms/Heading/Heading';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import LinkIcon from 'assets/icons/link.svg';
import CopyIcon from 'assets/icons/copy.svg';
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

const Card = ({ title, content, created, link }) => (
  <StyledWrapper>
    <InnerWrapper>
      <Heading>Witaj</Heading>
      <StyledLinkButton icon={LinkIcon} href={link} />
      <StyledCopyButton icon={CopyIcon} />
    </InnerWrapper>
    <Paragraph>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sed fermentum urna. Nullam
      pharetra sem sed vestibulum facilisis. Fusce finibus quis metus quis consectetur. In hac
      habitasse platea dictumst. Morbi vehicula urna risus, nec lobortis lacus ullamcorper ut. In
      accumsan feugiat lectus sed finibus. Donec accumsan accumsan vehicula. Suspendisse viverra
      libero diam. Maecenas placerat neque quis magna elementum blandit. Morbi mollis, lectus non
      vestibulum ullamcorper, purus lorem condimentum erat, eget bibendum augue dolor vel nunc.
      Etiam imperdiet ornare orci, vitae commodo odio auctor vitae. Nullam posuere nibh purus, vitae
      pretium purus tempor vitae. Aenean mauris sem, tincidunt ut gravida eu, faucibus vel sapien.
      Maecenas dignissim arcu sit amet nulla ullamcorper, id aliquam ipsum maximus. Nullam posuere
      ex vitae consectetur aliquet. Donec viverra felis dolor, id suscipit augue ullamcorper quis.{' '}
    </Paragraph>
  </StyledWrapper>
);

Card.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  created: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default Card;
