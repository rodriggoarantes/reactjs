import React, { useState, useEffect } from 'react';

import FormDev from '../../components/FormDev';
import ListDev from '../../components/ListDev';

import { Container, FormContainer, ListContainer } from './styles';

function Main() {
  const [newTech, setNewTech] = useState('');

  useEffect(() => {
    setNewTech('Rodrigo Arantes');
  }, []);

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
