import styled from 'styled-components';

const ButtonIcon = styled.button`
  background: url(${({ icon }) => icon});
`;

export default ButtonIcon;
