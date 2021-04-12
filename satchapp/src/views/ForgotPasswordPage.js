import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import Heading from 'components/atoms/Heading/Heading';
import Input from 'components/atoms/Input/Input';
import Button from 'components/atoms/Button/Button';
import { Link, useHistory } from 'react-router-dom';
import { routes } from 'routes';
import AuthTemplate from 'templates/AuthTemplate';
import { Formik, Form } from 'formik';
import { useAuth } from 'context/AuthContext';

const StyledForm = styled(Form)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const StyledInput = styled(Input)`
  margin: 0 0 30px 0;
  height: 40px;
  width: 300px;
  font-family: Montserrat;
`;

const StyledLink = styled(Link)`
  display: block;
  font-weight: ${({ theme }) => theme.bold};
  font-size: ${({ theme }) => theme.fontSize.xs};
  color: black;
  text-transform: uppercase;
  margin: 20px 0 50px;
`;

const StyledButton = styled(Button)`
  background-color: ${({ theme }) => theme.settings};
`;

const ForgotPasswordPage = () => (
  <AuthTemplate pageType="settings">
    <Formik>
      {({ handleChange, handleBlur }) => (
        <>
          <Heading>Reset your password</Heading>
          <StyledForm>
            <StyledInput
              type="email"
              placeholder="E-mail"
              onChange={handleChange}
              onBlur={handleBlur}
              required
            />
            <StyledButton type="submit">Reset password</StyledButton>
          </StyledForm>
          <StyledLink to={routes.login}>Already have an account?</StyledLink>
        </>
      )}
    </Formik>
  </AuthTemplate>
);

export default ForgotPasswordPage;
