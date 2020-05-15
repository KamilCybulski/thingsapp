import React from 'react';
import styled from 'styled-components/native';
import * as yup from 'yup';

import { Input, Button, Wrapper, AppTitle } from '..';
import { Formik } from 'formik';

const PhoneNumberFormWrapper = styled.View`
  align-items: center;
  flex: 1;
  justify-content: center;
  padding: 0 10%;
`;

const Error = styled.Text`
  color: #f00;
`;

const initialValues = {
  phoneNumber: '',
};

const validationSchema = yup.object().shape({
  phoneNumber: yup.string().required('This field is required'),
});

const PhoneNumberForm = ({ onSubmit, error }) => (
  <PhoneNumberFormWrapper>
    <AppTitle />
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {({
        handleSubmit,
        handleBlur,
        handleChange,
        values,
        errors,
        touched,
      }) => (
        <>
          <Wrapper mt="50px" mb="20px">
            <Input
              value={values.phoneNumber}
              onChangeText={handleChange('phoneNumber')}
              onBlur={handleBlur('phoneNumber')}
              error={touched.phoneNumber && errors.phoneNumber}
              placeholder="Your phone number"
              autoCompleteType="tel"
              keyboardType="phone-pad"
              returnKeyType="send"
              textContentType="telephoneNumber"
            />
          </Wrapper>
          <Wrapper mb="10px">
            <Button onPress={handleSubmit}>Send</Button>
          </Wrapper>
        </>
      )}
    </Formik>
    {error && <Error>{error}</Error>}
  </PhoneNumberFormWrapper>
);

export default PhoneNumberForm;
