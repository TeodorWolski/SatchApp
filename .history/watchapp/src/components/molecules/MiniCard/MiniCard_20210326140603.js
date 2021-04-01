import styled from 'styled-components';

const StyledWrapper = styled.div`
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

const MiniCard = () => (
  <StyledWrapper>
    <StyledImgTag src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fgithub.com%2Fstyled-components%2Fstyled-components&psig=AOvVaw2BKJNrADumMnS3r1h869Rm&ust=1616847272554000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCODgqfeCzu8CFQAAAAAdAAAAABAD" />
  </StyledWrapper>
);

export default MiniCard;
