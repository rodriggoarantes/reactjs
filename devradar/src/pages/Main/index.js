import React, { useEffect, useReducer } from 'react';

import api from '~/services/api';

import FormDev from '~/components/FormDev';
import ListDev from '~/components/ListDev';

import { DevContext, reducer } from '~/services/DevContext';

import { Container, FormContainer, ListContainer } from './styles';

function Main() {
  const [devs, dispatch] = useReducer(reducer, []);

  useEffect(() => {
    const fetchListDevs = async () => {
      const response = await api.get('/devs');
      dispatch({ type: 'load', payload: response.data });
    };

    fetchListDevs();
  }, []);

  return (
    <DevContext.Provider value={dispatch}>
      <Container>
        <FormContainer>
          <FormDev />
        </FormContainer>
        <ListContainer>
          <ListDev list={devs} />
        </ListContainer>
      </Container>
    </DevContext.Provider>
  );
}

export default Main;
