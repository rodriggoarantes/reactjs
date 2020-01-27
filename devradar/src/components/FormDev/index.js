import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { FaSpinner, FaPlus } from 'react-icons/fa';

import api from '~/services/api';

import { Container, Titulo, Form, Label, Input, Submit } from './styles';

export default function FormDev() {
  const [loading, setLoading] = useState(false);
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');
  const [username, setUsername] = useState('');
  const [techs, setTechs] = useState('');

  const handleAddDev = async event => {
    event.preventDefault();
    setLoading(true);

    const response = await api.post('/devs', {
      githubUsername: username,
      techs,
      latitude,
      longitude,
    });

    setUsername('');
    setTechs('');

    const { name, githubUsername } = response.data;
    toast.success(`Usuário ${name} (${githubUsername}) salvo com sucesso!`);
    setLoading(false);
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

        <Submit loading={loading ? 1 : 0}>
          {loading ? (
            <span>
              <FaSpinner color="white" size={14} />
              Salvando ...
            </span>
          ) : (
            <span>
              <FaPlus color="white" size={14} />
              Cadastrar
            </span>
          )}
        </Submit>
      </Form>
    </Container>
  );
}
