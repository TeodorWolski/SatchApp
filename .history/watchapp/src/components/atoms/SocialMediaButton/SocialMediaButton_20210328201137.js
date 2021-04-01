import styled from 'styled-components';

const SocialMediaButton = styled.a`
  height: 55px;
  width: 55px;
  border-radius: 25px;
  background-image: url(${({ icon }) => icon});
  background-color: ${({ theme }) => theme.home};
`;

export default SocialMediaButton;
