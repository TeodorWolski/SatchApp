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
    <StyledPhoto />
  </StyledWrapper>
);

export default MiniCard;
