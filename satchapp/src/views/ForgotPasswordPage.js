import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import Heading from 'components/atoms/Heading/Heading';
import Input from 'components/atoms/Input/Input';
import Button from 'components/atoms/Button/Button';
import { Link } from 'react-router-dom';
import { routes } from 'routes';
import AuthTemplate from 'templates/AuthTemplate';
import { Formik, Form } from 'formik';
import { useAuth } from 'context/AuthContext';
import Message from 'components/atoms/Message/Message';

const StyledForm = styled(Form)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const StyledInput = styled(Input)`
  margin: 5px 0 30px 0;
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
  margin: 20px 0 0;
`;

const StyledButton = styled(Button)`
  background-color: ${({ theme }) => theme.settings};
`;

const ForgotPasswordPage = () => {
  const emailRef = useRef();
  const { resetPassword } = useAuth();
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      setMessage('');
      setError('');
      setLoading(true);
      await resetPassword(emailRef.current.value);
      setMessage('Check your inbox for further instructions.');
    } catch {
      setError('Failed to reset password!');
    }

    setLoading(false);
  };

  return (
    <AuthTemplate pageType="settings">
      <Formik>
        {({ handleChange, handleBlur }) => (
          <>
            <Heading>Reset your password</Heading>
            {message && <Message success>{message}</Message>}
            {error && <Message>{error}</Message>}
            <StyledForm onSubmit={handleSubmit}>
              <StyledInput
                type="email"
                placeholder="E-mail"
                onChange={handleChange}
                onBlur={handleBlur}
                required
                ref={emailRef}
              />
              <StyledButton disabled={loading} type="submit">
                Reset password
              </StyledButton>
            </StyledForm>
            <StyledLink to={routes.login}>Already have an account?</StyledLink>
            <StyledLink to={routes.register}>Need an account?</StyledLink>
          </>
        )}
      </Formik>
    </AuthTemplate>
  );
};

export default ForgotPasswordPage;
