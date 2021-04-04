import React from 'react';
import styled from 'styled-components';
import Heading from 'components/atoms/Heading/Heading';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Input from 'components/atoms/Input/Input';
import Button from 'components/atoms/Button/Button';
import { addItem as addItemAction } from 'redux/actions';
import * as Yup from 'yup';
import { Formik, Form, Field } from 'formik';

const StyledWrapper = styled.div`
  border-left: 10px solid ${({ theme }) => theme.saves};
  height: 100vh;
  width: 680px;
  z-index: 9999;
  padding: 100px 50px;
  position: fixed;
  background-color: white;
  -webkit-box-shadow: -5px 0px 15px 0px rgba(0, 0, 0, 0.1);
  box-shadow: -5px 0px 15px 0px rgba(0, 0, 0, 0.1);
  right: 0;
  top: 0;
  display: flex;
  flex-direction: column;
  transform: translate(${({ isVisible }) => (isVisible ? '0' : '100%')});
  transition: transform 0.3s ease-in-out;
`;

const StyledTextArea = styled(Input)`
  margin: 30px 0 10px;
  border-radius: 20px;
  height: 30%;
  font-family: Montserrat;
  resize: none;
`;

const StyledInput = styled(Input)`
  margin-top: 30px;
  font-family: Montserrat;
`;

const StyledButton = styled(Button)`
  position: relative;
  top: 30px;
  height: 68px;
  margin-bottom: 0;
`;

const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
`;

const formValidation = Yup.object().shape({
  title: Yup.string().min(3, 'This title is to short!').required('Title is required'),
  link: Yup.string().min(5, 'Invalid link').required('Link is required'),
  created: Yup.string().min(2, 'The date is too short!'),
});

const StyledErrorMessage = styled.div`
  font-weight: bold;
  color: red;
  margin-left: 20px;
  margin-top: 20px;
`;

const NewItemBar = ({ isVisible, handleClose, addItem }) => (
  <StyledWrapper handleClose={handleClose} isVisible={isVisible}>
    <Heading big>Save your video!</Heading>
    <Formik
      validationSchema={formValidation}
      initialValues={{ title: '', link: '', content: '', created: '' }}
      onSubmit={(values) => {
        addItem(values);
        handleClose();
      }}
    >
      {({ values, errors, touched, handleChange, handleBlur }) => (
        <StyledForm as={Form}>
          <StyledInput
            as={Field}
            placeholder="title"
            type="text"
            name="title"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.title}
          />
          {errors.title && touched.title ? (
            <StyledErrorMessage>{errors.title}</StyledErrorMessage>
          ) : null}
          <StyledInput
            placeholder="date"
            type="text"
            name="created"
            value={values.created}
            onBlur={handleBlur}
            onChange={handleChange}
          />
          {errors.created && touched.created ? (
            <StyledErrorMessage>{errors.created}</StyledErrorMessage>
          ) : null}
          <StyledInput
            as={Field}
            placeholder="link"
            type="text"
            name="link"
            value={values.link}
            onBlur={handleBlur}
            onChange={handleChange}
          />
          {errors.link && touched.link ? (
            <StyledErrorMessage>{errors.link}</StyledErrorMessage>
          ) : null}
          <StyledTextArea
            type="text"
            value={values.content}
            onBlur={handleBlur}
            onChange={handleChange}
            placeholder="description"
            name="content"
            as="textarea"
          />
          <StyledButton type="submit">Save!</StyledButton>
        </StyledForm>
      )}
    </Formik>
  </StyledWrapper>
);

NewItemBar.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  addItem: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (itemContent) => dispatch(addItemAction(itemContent)),
});

export default connect(null, mapDispatchToProps)(NewItemBar);
