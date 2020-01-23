import React from 'react';

import {
  Card,
  Header,
  Avatar,
  Info,
  Name,
  Techs,
  Bio,
  LinkSite,
} from './styles';

function CardDev() {
  return (
    <Card>
      <Header>
        <Avatar />
        <Info>
          <Name />
          <Techs />
        </Info>
      </Header>
      <Bio />
      <LinkSite />
    </Card>
  );
}

export default CardDev;
