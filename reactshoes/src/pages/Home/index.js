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
          <img
            src="https://cdn.awsli.com.br/600x450/477/477972/produto/16759491/7a7fabf90d.jpg"
            alt="tenis"
          />
          <strong>Tenis muito Legal</strong>
          <span>R$ 129,90</span>

          <button type="button">
            <div>
              <MdAddShoppingCart size={16} color="white" />
            </div>
            <span>Adicionar ao Carrinho</span>
          </button>
        </li>
        <li>
          <img
            src="https://cdn.awsli.com.br/600x450/477/477972/produto/16759491/7a7fabf90d.jpg"
            alt="tenis"
          />
          <strong>Tenis muito Legal</strong>
          <span>R$ 129,90</span>

          <button type="button">
            <div>
              <MdAddShoppingCart size={16} color="white" />
            </div>
            <span>Adicionar ao Carrinho</span>
          </button>
        </li>
        <li>
          <img
            src="https://cdn.awsli.com.br/600x450/477/477972/produto/16759491/7a7fabf90d.jpg"
            alt="tenis"
          />
          <strong>Tenis muito Legal</strong>
          <span>R$ 129,90</span>

          <button type="button">
            <div>
              <MdAddShoppingCart size={16} color="white" />
            </div>
            <span>ADICIONAR AO CARRINHO</span>
          </button>
        </li>
      </ProductList>
    );
  }
}
