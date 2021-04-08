import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import * as Yup from 'yup';
import Heading from 'components/atoms/Heading/Heading';
import Input from 'components/atoms/Input/Input';
import Button from 'components/atoms/Button/Button';
import { Link } from 'react-router-dom';
import { routes } from 'routes';
import AuthTemplate from 'templates/AuthTemplate';
import { Formik, Form, Field } from 'formik';
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

const StyledErrorMessage = styled.div`
  width: 250px;
  height: 35px;
  border-radius: 25px;
  background-color: hsl(0, 100%, 81%);
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  bottom: 24%;
  color: red;
`;

const RegisterPage = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { signUp } = useAuth();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  // eslint-disable-next-line consistent-return
  const handleSubmit = async (event) => {
    event.preventDefault();

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError('Passwords do not match!');
    }

    try {
      setError('');
      setLoading(true);
      await signUp(emailRef.current.value, passwordRef.current.value);
    } catch {
      setError('Failed to create an account!');
    }

    setLoading(false);
  };

  return (
    <AuthTemplate pageType="saves">
      <Formik>
        {({ handleChange, handleBlur }) => (
          <>
            <Heading>Sign up!</Heading>
            {error && <StyledErrorMessage>{error}</StyledErrorMessage>}
            <StyledForm onSubmit={handleSubmit}>
              <StyledInput
                type="email"
                placeholder="E-mail"
                onChange={handleChange}
                onBlur={handleBlur}
                ref={emailRef}
                required
              />
              <StyledInput
                type="password"
                placeholder="password"
                onChange={handleChange}
                onBlur={handleBlur}
                ref={passwordRef}
                required
              />
              <StyledInput
                type="password"
                placeholder="re-type password"
                onChange={handleChange}
                onBlur={handleBlur}
                ref={passwordConfirmRef}
                required
              />
              <Button disabled={loading} type="submit">
                register
              </Button>
            </StyledForm>
            <StyledLink to={routes.login}>I want to log in!</StyledLink>
          </>
        )}
      </Formik>
    </AuthTemplate>
  );
};

export default RegisterPage;
