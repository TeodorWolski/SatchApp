import styled from 'styled-components';

const ButtonIcon = styled.button`
  height: 67px;
  width: 67px;
  background: url(${({ icon }) => icon});
  border-radius: 25px;
  border: none;
`;

export default ButtonIcon;
