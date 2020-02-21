import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';

import { useAuthentication } from '~/components/AuthProvider';
import { Form, Label, Input, Button } from '~/components/Form';

import { Title } from './styles';

import api from '~/services/api';

const Login = ({ history }) => {
  const auth = useAuthentication();

  const [email, setEmail] = useState('');

  const handleSubmit = async event => {
    event.preventDefault();

    if (!email) {
      toast.error('Informe um e-mail');
      return;
    }

    try {
      const response = await api.post('/sessions', { email });
      if (response && response.data && response.data) {
        const { id, name } = response.data;
        toast.success(`Seja bem vindo ${name}!`);

        auth.login({ id, name, email });

        history.push('/dashboard');
      } else {
        toast.error('Usuário não encontrado');
      }
    } catch (error) {
      toast.error('Não foi possivel registrar o usuario');
    }
  };

  return (
    <>
      <Title>
        Ofereça <strong>spots</strong> para programadores e encontre{' '}
        <strong>talentos</strong> para o seu time.
      </Title>

      <Form onSubmit={handleSubmit}>
        <Label htmlFor="email">E-mail *</Label>
        <Input
          id="email"
          type="email"
          placeholder="Seu melhor e-mail"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />

        <Button type="submit">Entrar</Button>
      </Form>
    </>
  );
};

Login.propTypes = {
  history: PropTypes.shape({ push: PropTypes.func.isRequired }).isRequired,
};

export default Login;
