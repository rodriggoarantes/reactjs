import React, { useState, useEffect } from 'react';

import api from '~/services/api';

import { List, Item } from './styles';
import CardDev from '../CardDev';

export default function ListDev() {
  const [listDevs, setListDevs] = useState([]);

  useEffect(() => {
    const fetchListDevs = async () => {
      const response = await api.get('/devs');
      setListDevs(response.data);
    };

    fetchListDevs();
  }, []);

  return (
    <List>
      {listDevs.map(item => (
        <Item key={item.githubUsername}>
          <CardDev dev={item} />
        </Item>
      ))}
    </List>
  );
}
