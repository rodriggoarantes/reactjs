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
        <Avatar
          src="https://api.adorable.io/avatars/50/avatar.png"
          alt="Rodrigo"
        />
        <Info>
          <Name>Rodrigo Arantes</Name>
          <Techs>Java, Node, Javascript, React, Android</Techs>
        </Info>
      </Header>
      <Bio>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
      </Bio>
      <LinkSite href="https://github.com/rodriggoarantes" target="_blank">
        Acesse perfil no Github
      </LinkSite>
    </Card>
  );
}

export default CardDev;
