import React, { useRef, useState } from 'react';
import styled from 'styled-components';
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

const StyledButtonChange = styled(StyledButton)`
  @media (min-width: 1300px) {
    position: relative;
    top: 0;
  }
`;

const UpdatePasswordCard = () => {
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { currentUser, updatePassword } = useAuth();
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  // eslint-disable-next-line consistent-return
  const handleSubmit = (event) => {
    event.preventDefault();

    setLoading(true);
    setError('');
    if (
      passwordRef.current.value === passwordConfirmRef.current.value &&
      passwordRef.current.value !== currentUser.password
    ) {
      updatePassword(passwordRef.current.value);
      setMessage('Password updated successfully');
    } else {
      setError('Failed to update password');
    }

    setLoading(false);
  };

  return (
    <StyledWrapper>
      <Formik>
        {({ handleChange, handleBlur }) => (
          <>
            <InnerWrapper>
              <StyledHeading big>Update your password</StyledHeading>
            </InnerWrapper>
            <InnerWrapper flex>
              <StyledForm onSubmit={handleSubmit}>
                {error && <Message>{error}</Message>}
                {message && <Message success>{message}</Message>}
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
                <StyledButtonChange disabled={loading} type="submit">
                  Submit
                </StyledButtonChange>
              </StyledForm>
            </InnerWrapper>
          </>
        )}
      </Formik>
    </StyledWrapper>
  );
};

export default UpdatePasswordCard;
