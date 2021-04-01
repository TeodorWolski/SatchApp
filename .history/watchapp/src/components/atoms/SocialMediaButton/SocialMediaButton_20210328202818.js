import styled from 'styled-components';

const SocialMediaButton = styled.div`
  height: 55px;
  width: 55px;
  border-radius: 25px;
  background-color: ${({ theme }) => theme.home};
  background-image: url(${({ icon }) => icon});
  background-position: 2%;
  background-repeat: no-repeat;
`;

export default SocialMediaButton;
