import React, { useRef, useState } from 'react';
import { Formik } from 'formik';
import { useAuth } from 'context/AuthContext';
import Message from 'components/atoms/Message/Message';
import {
  StyledWrapper,
  InnerWrapper,
  StyledHeading,
  StyledButton,
  StyledInput,
  StyledForm,
} from './SemiCardStyles';

const UpdateEmailCard = () => {
  const emailRef = useRef();
  const { currentUser, updateEmail } = useAuth();
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  // eslint-disable-next-line consistent-return
  const handleSubmit = (event) => {
    event.preventDefault();

    setLoading(true);
    setError('');

    if (emailRef.current.value !== currentUser.email) {
      updateEmail(emailRef.current.value);
      setMessage('E-mail has been updated successfully');
    } else {
      setError('This is your current e-mail');
    }
  };

  return (
    <StyledWrapper>
      <Formik>
        {({ handleChange, handleBlur }) => (
          <>
            <InnerWrapper>
              <StyledHeading big>Update your e-mail</StyledHeading>
            </InnerWrapper>
            <InnerWrapper flex>
              <StyledForm onSubmit={handleSubmit}>
                <StyledInput
                  type="email"
                  placeholder="new e-mail"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  required
                  ref={emailRef}
                />
                <StyledButton disabled={loading} type="submit">
                  Submit
                </StyledButton>
                {error && <Message>{error}</Message>}
                {message && <Message success>{message}</Message>}
              </StyledForm>
            </InnerWrapper>
          </>
        )}
      </Formik>
    </StyledWrapper>
  );
};

export default UpdateEmailCard;
