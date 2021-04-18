import styled, { css } from 'styled-components';
import { Form } from 'formik';
import Heading from 'components/atoms/Heading/Heading';
import Input from 'components/atoms/Input/Input';
import Button from 'components/atoms/Button/Button';

export const StyledWrapper = styled.div`
  position: relative;
  height: 500px;
  width: 500px;
  border-radius: 10px;
  margin: 50px;
  overflow: hidden;
  display: grid;
  position: relative;
  grid-template-rows: 0.25fr 1fr;
  box-shadow: 10px 9px 13px 0px rgba(203, 203, 203, 0.75);
  -webkit-box-shadow: 10px 9px 13px 0px rgba(203, 203, 203, 0.75);
  -moz-box-shadow: 10px 9px 13px 0px rgba(203, 203, 203, 0.75);

  @media (max-width: 1750px) {
    bottom: 14%;
  }
`;

export const InnerWrapper = styled.div`
  padding: 35px 30px;
  position: relative;
  background-color: ${({ theme }) => theme.settings};
  text-align: center;

  :first-of-type {
    z-index: 9999;
  }

  ${({ flex }) =>
    flex &&
    css`
      background-color: white;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      flex-wrap: wrap;
    `}
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
`;

export const StyledInput = styled(Input)`
  width: 350px;
  margin: 25px 0 10px 0;
`;

export const StyledForm = styled(Form)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
