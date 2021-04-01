import styled from 'styled-components';

const ButtonIcon = styled.button`
  height: 67px;
  width: 67px;
  background: url(${({ icon }) => icon}) no-repeat;
  border-radius: 20px;
  border: none;
  background-size: 75%;
  transform: translateY(-50%);
`;

export default ButtonIcon;
