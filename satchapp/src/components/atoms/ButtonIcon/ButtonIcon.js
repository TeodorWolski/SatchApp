import styled from 'styled-components';

const ButtonIcon = styled.button`
  height: 67px;
  width: 67px;
  background-image: url(${({ icon }) => icon});
  background-repeat: no-repeat;
  background-color: ${({ active }) => (active ? 'white' : 'transparent')};
  border-radius: 20px;
  border: none;
  display: block;
  background-size: 68%;
  background-position: center;
  cursor: pointer;

  &.active {
    background-color: white;
  }

  @media (max-width: 415px) {
    width: 50px;
    height: 50px;
  }
`;

export default ButtonIcon;
