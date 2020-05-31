import React from 'react';
import styled from 'styled-components/native';

const NewItemFormContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const NewItemFormHeader = styled.View`
  color: #000;
  font-size: 40px;
  line-height: 48px;
`;

const NewItemForm = () => {
  return (
    <NewItemFormContainer>
      <NewItemFormHeader>Add new item</NewItemFormHeader>
    </NewItemFormContainer>
  );
};

export default NewItemForm;
