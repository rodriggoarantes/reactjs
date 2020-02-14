import React, { Component } from 'react';

import Container from '~/components/Container';
import { Border } from './styles';

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Container>
        <Border>
          <h1>Hello AIRCNC</h1>
        </Border>
      </Container>
    );
  }
}
