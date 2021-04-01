import styled from 'styled-components';

const SocialMediaButton = styled.a`
  height: 55px;
  width: 55px;
  border-radius: 25px;
  background: ${({ theme }) => theme.home} url(${({ icon }) => icon}) no-repeat;
`;

export default SocialMediaButton;
