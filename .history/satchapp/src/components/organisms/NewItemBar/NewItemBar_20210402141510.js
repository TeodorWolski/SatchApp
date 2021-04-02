import React from 'react';
import styled from 'styled-components';
import Heading from 'components/atoms/Heading/Heading';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Input from 'components/atoms/Input/Input';
import Button from 'components/atoms/Button/Button';
import { addItem as addItemAction } from 'redux/actions';
import { Formik, Form, Field, ErrorMessage } from 'formik';

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
`;

const StyledInput = styled(Input)`
  margin-top: 30px;
  font-family: Montserrat;
`;

const StyledButton = styled(Button)`
  position: relative;
  top: 13%;
  bottom: 0;
`;

const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
`;

const NewItemBar = ({ isVisible, handleClose, addItem }) => (
  <StyledWrapper isVisible={isVisible}>
    <Heading big>Save your video!</Heading>
    <Formik
      initialValues={{ title: '', link: '', content: '', created: '' }}
      onSubmit={(values) => {
        addItem(values);
        handleClose();
      }}
    >
      {({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
        <StyledForm as={Form}>
          <StyledInput
            placeholder="title"
            type="text"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.title}
          />
          <StyledInput
            placeholder="date"
            type="text"
            value={values.created}
            onBlur={handleBlur}
            onChange={handleChange}
          />
          <StyledInput
            placeholder="link"
            type="text"
            value={values.link}
            onBlur={handleBlur}
            onChange={handleChange}
          />
          <StyledTextArea
            type="text"
            value={values.content}
            onBlur={handleBlur}
            onChange={handleChange}
            placeholder="description"
            as="textarea"
          />
          <StyledButton type="submit">Save!</StyledButton>
        </StyledForm>
      )}
    </Formik>
  </StyledWrapper>
);

const mapDispatchToProps = (dispatch) => ({
  addItem: (savedVideos, item) => dispatch(addItemAction(savedVideos, item)),
});

export default connect(mapDispatchToProps)(NewItemBar);

NewItemBar.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  addItem: PropTypes.func.isRequired,
};
