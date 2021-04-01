import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Heading from 'components/atoms/Heading/Heading';

const StyledWrapper = styled.div`
  width: 170px;
  height: 170px;
  border-radius: 25px;
  background-color: #71db77;
  display: block;
  position: relative;
  cursor: pointer;
`;

const StyledPhoto = styled.img`
  position: relative;
  width: 100px;
  height: 100px;
  top: 35px;
  left: 20%;
  background: url(${({ photo }) => photo});
  background-repeat: no-repeat;
`;

const MiniCard = ({ photo }) => (
  <>
    <Heading> I have built this app with these technologies:</Heading>
    <StyledWrapper>
      <StyledPhoto src={photo} />
    </StyledWrapper>
  </>
);

MiniCard.propTypes = {
  photo: PropTypes.string.isRequired,
};

export default MiniCard;
