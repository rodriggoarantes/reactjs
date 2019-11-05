import React, { Component } from 'react';
import Container from '../../components/Container';

export default class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Container>
        <h1>Cart</h1>
      </Container>
    );
  }
}
