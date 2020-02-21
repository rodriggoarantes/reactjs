import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useAuthentication } from '~/components/AuthProvider';

import api from '~/services/api';

import { Lista, Item, Thumb, Name, Price } from './styles';

const Dashboard = ({ history }) => {
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

      <hr style={{ margin: '10px 0' }} />
      <span>Não há reservas pendentes</span>
      <hr style={{ margin: '10px 0' }} />

      <Lista>
        {spots.map(spot => (
          <Item key={spot._id}>
            <Thumb url={spot.thumbnail} />
            <Name>
              <strong>{spot.company}</strong>
              <span>{spot.name}</span>
            </Name>
            <Price>{spot.price ? `R$ ${spot.price}/dia` : 'FREE'}</Price>
          </Item>
        ))}
      </Lista>
    </>
  );
};

Dashboard.propTypes = {
  history: PropTypes.shape({ push: PropTypes.func.isRequired }).isRequired,
};

export default Dashboard;
