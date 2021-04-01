import styled from 'styled-components';

const MiniCard = styled.a`
  width: 50px;
  height: 50px;
  border-radius: 25px;
  background-color: ${({ theme }) => theme.geeks};
`;

export default MiniCard;
