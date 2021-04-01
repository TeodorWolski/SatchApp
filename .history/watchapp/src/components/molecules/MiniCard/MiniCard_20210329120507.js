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
  left: 31%;

  @media (min-width: 415px) {
    width: 170px;
    height: 170px;
    margin-left: 30%;
  }
`;

const StyledPhoto = styled.img`
  position: relative;
  width: 65px;
  height: 65px;
  top: 16%;
  left: 18%;

  @media (min-width: 415px) {
    width: 100px;
    height: 100px;
    top: 35px;
    left: 20%;
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
