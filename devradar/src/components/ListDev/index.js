import React from 'react';

import { List, Item } from './styles';
import CardDev from '../CardDev';

export default function ListDev() {
  return (
    <List>
      <Item>
        <CardDev />
      </Item>
      <Item>
        <CardDev />
      </Item>
      <Item>
        <CardDev />
      </Item>
      <Item>
        <CardDev />
      </Item>
    </List>
  );
}
