import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { useAuthentication } from '~/components/AuthProvider';
import { Button } from '~/components/Form';

import api from '~/services/api';

import { Lista, Item, Thumb, Name, Price, Line } from './styles';

const Dashboard = () => {
  const [spots, setSpots] = useState([]);
  const auth = useAuthentication();

  useEffect(() => {
    async function loadSpots() {
      const response = await api.get('/profiles/spots', {
        headers: { user_id: auth.user.id },
      });

      if (response && response.data) {
        setSpots(response.data);
      }
    }
    if (auth.user) {
      loadSpots();
    }
  }, [auth]);

  return (
    <>
      {auth.user && auth.user.name ? (
        <header>
          <h3>Olá</h3>
          <p>{auth.user.name}</p>
        </header>
      ) : (
        <span>Acesso nao Permitido</span>
      )}

      <Line />
      <span>Não há reservas pendentes</span>
      <Line />

      <Lista>
        {spots.map(spot => (
          <Item key={spot._id}>
            <Thumb url={spot.thumbnail} />
            <Name>
              <strong>{spot.company}</strong>
              <span>{spot.name}</span>
            </Name>
            <Price>
              {spot.price && parseInt(spot.price, 10) > 0
                ? `R$ ${spot.price}/dia`
                : 'FREE'}
            </Price>
          </Item>
        ))}
      </Lista>

      <Link to="/new">
        <Button type="button">Cadastrar Spot</Button>
      </Link>
    </>
  );
};

export default Dashboard;
