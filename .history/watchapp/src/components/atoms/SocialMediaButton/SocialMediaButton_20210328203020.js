import styled from 'styled-components';

const SocialMediaButton = styled.div`
  height: 70px;
  width: 70px;
  border-radius: 50px;
  background-color: ${({ theme }) => theme.home};
  background-image: url(${({ icon }) => icon});
  background-repeat: no-repeat;
  background-size: 45%;
`;

export default SocialMediaButton;
