import React from 'react';
import styled from 'styled-components';

const StyledWrapper = styled.div`
  width: 170px;
  height: 170px;
  border-radius: 25px;
  background-color: #71db77;
  display: block;
  position: relative;
`;

const StyledPhoto = styled.a`
  width: 50px;
  height: 50px;
  background-image: url(${({ photo }) => photo});
`;

const MiniCard = () => (
  <StyledWrapper>
    <StyledPhoto photo="https://cdn-images-1.medium.com/max/1200/1*y1fCsOVCYCTi1B9Q_0BOYg.png" />
  </StyledWrapper>
);

export default MiniCard;
