import styled, { css } from 'styled-components';
import { Form } from 'formik';
import Heading from 'components/atoms/Heading/Heading';
import Input from 'components/atoms/Input/Input';
import Button from 'components/atoms/Button/Button';

export const StyledWrapper = styled.div`
  position: relative;
  /* height: 500px;
  width: 500px; */
  border-radius: 10px;
  margin: 50px;
  overflow: hidden;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 10px 9px 13px 0px rgba(203, 203, 203, 0.75);
  -webkit-box-shadow: 10px 9px 13px 0px rgba(203, 203, 203, 0.75);
  -moz-box-shadow: 10px 9px 13px 0px rgba(203, 203, 203, 0.75);

  @media (min-width: 360px) {
    margin: 15px 0px 10px 0;
    right: 3%;
    width: 350px;
  }

  @media (min-width: 700px) {
    width: 80%;
  }

  @media (min-width: 1300px) {
    width: 500px;
    height: 500px;
  }

  @media (max-width: 1750px) {
    bottom: 14%;
  }
`;
export const InnerWrapper = styled.div`
  padding: 35px 30px;
  position: relative;
  background-color: ${({ theme }) => theme.settings};
  text-align: center;

  ${({ flex }) =>
    flex &&
    css`
      background-color: white;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      flex-wrap: wrap;
    `}

  @media (min-width: 350px) {
    padding: 35px 89px;
  }

  @media (min-width: 1300px) {
    padding: 65px 89px;
  }
`;

export const StyledHeading = styled(Heading)`
  margin: 5px 0 0;
  display: block;
  font-weight: ${({ theme }) => theme.bold};
`;

export const StyledButton = styled(Button)`
  position: relative;
  background-color: ${({ theme }) => theme.settings};
  top: 20%;

  @media (min-width: 350px) {
    margin-top: 30px;
  }
`;

export const StyledInput = styled(Input)`
  width: 350px;
  margin: 25px 0 10px 0;

  @media (min-width: 350px) {
    width: 250px;
  }
`;

export const StyledForm = styled(Form)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
