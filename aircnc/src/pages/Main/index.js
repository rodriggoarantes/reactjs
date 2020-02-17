import React from 'react';

import Container from '~/components/Container';
import {
  Logo,
  Content,
  Title,
  Form,
  Label,
  Input,
  SubmitButton,
} from './styles';

import api from '~/services/api';

export default function Main() {
  const handleSubmit = async event => {
    event.preventDefault();

    const response = await api.get('/status');
    console.log(`submit ${JSON.stringify(response.data)}`);
  };

  return (
    <Container>
      <Logo />
      <Content>
        <Title>
          Ofereça <strong>spots</strong> para programadores e encontre{' '}
          <strong>talentos</strong> para o seu time.
        </Title>

        <Form onSubmit={handleSubmit}>
          <Label htmlFor="email">E-mail *</Label>
          <Input id="email" type="email" placeholder="Seu melhor e-mail" />

          <SubmitButton>Entrar</SubmitButton>
        </Form>
      </Content>
    </Container>
  );
}
