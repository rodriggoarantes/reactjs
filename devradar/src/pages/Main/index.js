import React from 'react';

import FormDev from '../../components/FormDev';
import ListDev from '../../components/ListDev';

import { Container, FormContainer, ListContainer } from './styles';

function Main() {
  return (
    <Container>
      <FormContainer>
        <FormDev />
      </FormContainer>
      <ListContainer>
        <ListDev />
      </ListContainer>
    </Container>
  );
}

export default Main;
