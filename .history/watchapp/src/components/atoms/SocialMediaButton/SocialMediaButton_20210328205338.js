import styled from 'styled-components';

const SocialMediaButton = styled.div`
  position: relative;
  height: 70px;
  width: 70px;
  border-radius: 25px;
  background-color: ${({ theme }) => theme.home};
  background-image: url(${({ icon }) => icon});
  background-repeat: no-repeat;
  background-size: 50%;
  background-position: 50%;
  margin-top: 15px;
`;

export default SocialMediaButton;
