import React from 'react';

import { Container, Titulo, Form, Label, Input, Submit } from './styles';

export default function FormDev() {
  return (
    <Container>
      <Titulo>Cadastrar</Titulo>
      <Form>
        <div className="input-block">
          <Label htmlFor="username">Usuário do Github</Label>
          <Input id="username" required />
        </div>

        <div className="input-block">
          <Label htmlFor="techs">Tecnologias</Label>
          <Input id="techs" required />
        </div>

        <div className="input-group">
          <div className="input-block">
            <Label htmlFor="latitude">Latitude</Label>
            <Input id="latitude" required />
          </div>
          <div className="input-block">
            <Label htmlFor="longitude">Longitude</Label>
            <Input id="longitude" required />
          </div>
        </div>

        <Submit>Cadastrar</Submit>
      </Form>
    </Container>
  );
}
