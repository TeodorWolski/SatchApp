import styled from 'styled-components';

const SocialMediaButton = styled.a`
  position: relative;
  height: 70px;
  width: 70px;
  border-radius: 25px;
  background-color: ${({ theme }) => theme.home};
  background-image: url(${({ icon }) => icon});
  background-repeat: no-repeat;
  background-size: 50%;
  right
`;

export default SocialMediaButton;
