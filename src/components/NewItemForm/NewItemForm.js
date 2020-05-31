import React, { useCallback } from 'react';
import styled from 'styled-components/native';
import * as yup from 'yup';
import { Formik } from 'formik';

import Wrapper from '../Wrapper';
import Button from '../Button';
import Input from '../Input';

const NewItemFormContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const NewItemFormHeader = styled.Text`
  color: #fff;
  font-size: 40px;
  line-height: 48px;
`;

const initialValues = {
  name: '',
  quantity: 1,
  date: new Date(),
};

const validationSchema = yup.object().shape({
  name: yup.string().required('This field is required'),
  quantity: yup
    .number()
    .min(0.1, 'Minimal amount is 0.1')
    .max(999, 'Max amount is 999'),
  date: yup.date().required('This field is required'),
});

const NewItemForm = () => {
  const handleNewItemSubmit = useCallback(values => {
    console.log(values);
  }, []);

  return (
    <NewItemFormContainer>
      <NewItemFormHeader>Add new item</NewItemFormHeader>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleNewItemSubmit}
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
                value={values.name}
                onChangeText={handleChange('name')}
                onBlur={handleBlur('name')}
                error={touched.name && errors.name}
                placeholder="Item's name"
                autoCompleteType="off"
                returnKeyType="done"
              />
              {/* <Input
                value={values.quantity}
                onChangeText={handleChange('quantity')}
                onBlur={handleBlur('quantity')}
                error={touched.quantity && errors.quantity}
                placeholder="How much stuff?"
                autoCompleteType="off"
                keyboardType="number-pad"
                returnKeyType="done"
              /> */}
            </Wrapper>
            <Wrapper mb="10px">
              <Button onPress={handleSubmit}>Send</Button>
            </Wrapper>
          </>
        )}
      </Formik>
    </NewItemFormContainer>
  );
};

export default NewItemForm;
