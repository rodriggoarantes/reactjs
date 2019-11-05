import React, { Component } from 'react';

import { MdAddShoppingCart } from 'react-icons/md';

import { ProductList } from './styles';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <ProductList>
        <li>
          <img src="http://lorempixel.com/400/400/sports/1/" alt="tenis" />
          <strong>Tenis muito Legal</strong>
          <span>R$ 129,90</span>

          <button type="button">
            <div>
              <MdAddShoppingCart size={16} color="white" />
            </div>
            <span>Adicionar ao Carrinho</span>
          </button>
        </li>
      </ProductList>
    );
  }
}
