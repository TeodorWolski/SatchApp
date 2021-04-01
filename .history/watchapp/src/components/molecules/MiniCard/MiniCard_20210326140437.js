import styled from 'styled-components';

const StyledWrapper = styled.a`
  width: 170px;
  height: 170px;
  border-radius: 25px;
  background-color: #71db77;
  display: block;
  position: relative;
`;

const StyledImgTag = styled.img`
  width: 50px;
  height: 50px;
`;

const MiniCard = () => <StyledWrapper></StyledWrapper>;

export default MiniCard;
