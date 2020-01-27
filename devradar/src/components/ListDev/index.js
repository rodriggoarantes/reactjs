import React from 'react';
import PropTypes from 'prop-types';

import { List, Item } from './styles';
import CardDev from '../CardDev';

function ListDev({ list }) {
  return (
    <List>
      {list.map(dev => (
        <Item key={dev.githubUsername}>
          <CardDev dev={dev} />
        </Item>
      ))}
    </List>
  );
}

ListDev.propTypes = {
  list: PropTypes.arrayOf(CardDev.propTypes.dev).isRequired,
};

export default ListDev;
