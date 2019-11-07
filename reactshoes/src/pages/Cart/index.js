import React, { Component } from 'react';

import {
  MdRemoveCircleOutline,
  MdAddCircleOutline,
  MdDelete,
} from 'react-icons/md';

import { Container, ProductTable, Total, Footer } from './styles';

export default class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Container>
        <ProductTable>
          <thead>
            <tr>
              <th />
              <th>PRODUTO</th>
              <th>QTD</th>
              <th>SUBTOTAL</th>
              <th />
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <img
                  src="https://cdn.awsli.com.br/600x450/477/477972/produto/16759491/7a7fabf90d.jpg"
                  alt="Produto"
                />
              </td>
              <td>
                <strong>Tenis dfasdfasfd sadfasfd </strong>
                <span>R$ 129,99</span>
              </td>
              <td>
                <div>
                  <button type="button">
                    <MdRemoveCircleOutline size={20} color="#7159c1" />
                  </button>

                  <input type="number" name="quantidade" id="" value={1} />
                  <button type="button">
                    <MdAddCircleOutline size={20} color="#7159c1" />
                  </button>
                </div>
              </td>
              <td>
                <strong>R$ 258,80</strong>
              </td>
              <td>
                <button>
                  <MdDelete size={20} color="#7159c1" />
                </button>
              </td>
            </tr>
          </tbody>
        </ProductTable>
        <Footer>
          <button>Finalizar Pedido</button>
          <Total>
            <span>TOTAL</span>
            <strong>R$ 999.999,999</strong>
          </Total>
        </Footer>
      </Container>
    );
  }
}
