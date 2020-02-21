import React, { useState } from 'react';

// import { Container } from './styles';
import { Form, Label, Input, Button } from '~/components/Form';

export default function New() {
  const [company, setCompany] = useState('');
  const [techs, setTechs] = useState('');
  const [price, setPrice] = useState('');

  const handleSubmit = async event => {
    event.preventDefault();
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Label htmlFor="company">Empresa *</Label>
        <Input
          id="company"
          type="text"
          placeholder="Seu empresa incrível"
          value={company}
          onChange={e => setCompany(e.target.value)}
        />

        <Label htmlFor="techs">
          Tecnologias * <span>(separadas por virgula)</span>
        </Label>
        <Input
          id="techs"
          type="text"
          placeholder="Qualis tecnologias usam?"
          value={techs}
          onChange={e => setTechs(e.target.value)}
        />

        <Label htmlFor="price">Valor cobrado por dia *</Label>
        <Input
          id="price"
          type="number"
          placeholder="Valor cobrado por dia"
          value={price}
          onChange={e => setPrice(e.target.value)}
        />

        <Button type="submit">Cadastrar</Button>
      </Form>
    </>
  );
}
