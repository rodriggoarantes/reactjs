import React, { useState, useEffect } from 'react';

import { Container, Titulo, Form, Label, Input, Submit } from './styles';

export default function FormDev() {
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');

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
            <Input id="latitude" type="number" required value={latitude} />
          </div>
          <div className="input-block">
            <Label htmlFor="longitude">Longitude</Label>
            <Input id="longitude" type="number" required value={longitude} />
          </div>
        </div>

        <Submit>Cadastrar</Submit>
      </Form>
    </Container>
  );
}
