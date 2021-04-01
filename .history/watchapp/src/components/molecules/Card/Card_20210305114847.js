import React from 'react';
import styled from 'styled-components';
import Heading from 'components/atoms/Heading/Heading';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import Link from 'assets/icons/link.svg';

const StyledWrapper = styled.div`
  min-height: 380px;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 10px 9px 13px 0px rgba(203, 203, 203, 0.75);
  -webkit-box-shadow: 10px 9px 13px 0px rgba(203, 203, 203, 0.75);
  -moz-box-shadow: 10px 9px 13px 0px rgba(203, 203, 203, 0.75);
`;

const InnerWrapper = styled.div`
  background-color: hsl(275, 81%, 69%);
  padding: 17px 30px;
`;

const StyledLinkButton = styled.a`
  background: url(${Link});
  border-radius: 100px;
`;

const Card = () => (
  <StyledWrapper>
    <InnerWrapper>
      <Heading>Witaj</Heading>
      <StyledLinkButton />
    </InnerWrapper>
  </StyledWrapper>
);

export default Card;
