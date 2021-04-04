import React from 'react';
import styled from 'styled-components';
import * as Yup from 'yup';
import Heading from 'components/atoms/Heading/Heading';
import Input from 'components/atoms/Input/Input';
import Button from 'components/atoms/Button/Button';
import { Link } from 'react-router-dom';
import { routes } from 'routes';
import AuthTemplate from 'templates/AuthTemplate';
import { Formik, Form, Field } from 'formik';

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
  background-color: ${({ theme }) => theme.home};
`;

const RegisterPage = () => (
  <AuthTemplate pageType="home">
    <Formik
      initialValues={{ username: '', password: '' }}
      onSubmit={({ username, password }) => {
        console.log('hello');
      }}
    >
      {({ handleChange, handleBlur, values }) => (
        <>
          <Heading>Log in!</Heading>
          <StyledForm>
            <StyledInput
              type="email"
              name="email"
              placeholder="E-mail"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.title}
            />
            <StyledInput
              type="password"
              name="password"
              placeholder="password"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.title}
            />
            <StyledButton activecolor="notes" type="submit">
              log in
            </StyledButton>
          </StyledForm>
          <StyledLink to={routes.register}>Need an account?</StyledLink>
        </>
      )}
    </Formik>
  </AuthTemplate>
);

export default RegisterPage;
