import React, { useRef, useState } from 'react';
import { Formik } from 'formik';
import { useAuth } from 'context/AuthContext';
import {
  StyledWrapper,
  InnerWrapper,
  StyledHeading,
  StyledButton,
  StyledInput,
  StyledForm,
} from './SemiCardStyles';

const UpdatePasswordCard = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { currentUser, updatePassword, updateEmail } = useAuth();
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  // eslint-disable-next-line consistent-return
  const handleSubmit = (event) => {
    event.preventDefault();

    const promises = [];

    if (passwordRef.current.value === passwordConfirmRef.current.value) {
      return promises.push(updateEmail(emailRef.current.value));
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
              <StyledForm>
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
                <StyledButton type="submit">Submit</StyledButton>
              </StyledForm>
            </InnerWrapper>
          </>
        )}
      </Formik>
    </StyledWrapper>
  );
};

export default UpdatePasswordCard;
