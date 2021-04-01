import styled from 'styled-components';

const ButtonIcon = styled.button`
  height: 67px;
  width: 67px;
  background: url(${({ icon }) => icon});
`;

export default ButtonIcon;
