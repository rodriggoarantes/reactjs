import React, { useState, useEffect } from 'react';

import { Container, Titulo, Form, Label, Input, Submit } from './styles';

export default function FormDev() {
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');
  const [username, setUsername] = useState('');
  const [techs, setTechs] = useState('');

  const handleAddDev = async event => {
    event.preventDefault();
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      position => {
        if (position && position.coords) {
          if (position && position.coords) {
            const { latitude: lati, longitude: longi } = position.coords;
            setLatitude(lati);
            setLongitude(longi);
          }
        }
      },
      () => {
        setLatitude(0);
        setLongitude(0);
      },
      { timeout: 30000 }
    );
  }, []);

  return (
    <Container>
      <Titulo>Cadastrar</Titulo>
      <Form onSubmit={handleAddDev}>
        <div className="input-block">
          <Label htmlFor="username">Usuário do Github</Label>
          <Input
            id="username"
            required
            value={username}
            onChange={e => setUsername(e.target.value)}
          />
        </div>

        <div className="input-block">
          <Label htmlFor="techs">Tecnologias</Label>
          <Input
            id="techs"
            required
            value={techs}
            onChange={e => setTechs(e.target.value)}
          />
        </div>

        <div className="input-group">
          <div className="input-block">
            <Label htmlFor="latitude">Latitude</Label>
            <Input
              id="latitude"
              type="number"
              required
              value={latitude}
              onChange={e => setLatitude(e.target.value)}
            />
          </div>
          <div className="input-block">
            <Label htmlFor="longitude">Longitude</Label>
            <Input
              id="longitude"
              type="number"
              required
              value={longitude}
              onChange={e => setLongitude(e.target.value)}
            />
          </div>
        </div>

        <Submit>Cadastrar</Submit>
      </Form>
    </Container>
  );
}
