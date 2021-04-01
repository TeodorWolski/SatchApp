import styled from 'styled-components';

const SocialMediaButton = styled.div`
  height: 80px;
  width: 80px;
  border-radius: 25px;
  background-color: ${({ theme }) => theme.home};
  background-image: url(${({ icon }) => icon});
  background-repeat: no-repeat;
  background-size: 45%;
`;

export default SocialMediaButton;
