import React from 'react';
import PropTypes from 'prop-types';

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

function CardDev({ dev }) {
  return (
    <Card>
      <Header>
        <Avatar
          src={
            dev.avatarUrl || `https://api.adorable.io/avatar/50/${dev.name}.png`
          }
          alt={dev.name}
        />
        <Info>
          <Name>{dev.name}</Name>
          <Techs>{dev.techs && dev.techs.join(', ')}</Techs>
        </Info>
      </Header>
      <Bio>{dev.bio}</Bio>
      <LinkSite
        href={`https://github.com/${dev.githubUsername}`}
        target="_blank"
      >
        Acesse perfil no Github
      </LinkSite>
    </Card>
  );
}

CardDev.propTypes = {
  dev: PropTypes.shape({
    name: PropTypes.string.isRequired,
    avatarUrl: PropTypes.string,
    bio: PropTypes.string,
    githubUsername: PropTypes.string.isRequired,
    techs: PropTypes.array,
  }).isRequired,
};

export default CardDev;
