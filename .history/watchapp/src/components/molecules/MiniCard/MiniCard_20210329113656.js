import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledWrapper = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 25px;
  background-color: #71db77;
  display: block;
  position: relative;
  cursor: pointer;

  @media (max-width: 375px) {
    width: 170px;
    height: 170px;
  }
`;

const StyledPhoto = styled.img`
  position: relative;
  width: 50px;
  height: 50px;
  top: 35px;
  left: 20%;

  @media (max-width: 375px) {
    width: 100px;
    height: 100px;
  } ;
`;

const MiniCard = ({ photo }) => (
  <StyledWrapper>
    <StyledPhoto src={photo} />
  </StyledWrapper>
);

MiniCard.propTypes = {
  photo: PropTypes.string.isRequired,
};

export default MiniCard;
