import styled from 'styled-components';

const ButtonIcon = styled.button`
  height: 67px;
  width: 67px;
  background-image: url(${({ icon }) => icon});
  background-repeat: no-repeat;
  background-color: ${({ active, theme }) => theme.}
  border-radius: 20px;
  border: none;
  display: block;
  background-size: 75%;
  background-position: center;
`;

export default ButtonIcon;
