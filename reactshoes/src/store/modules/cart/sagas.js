import { call, select, put, all, takeLatest } from 'redux-saga/effects';

import { types, addToCartSuccess, updateAmount } from './actions';
import api from '../../../services/api';

import { formatPrice } from '../../../util/format';

function* addtoCart({ id }) {
  const productExists = yield select(state =>
    state.cart.find(p => p.id === id)
  );

  const stock = yield call(api.get, `/stock/${id}`);
  const stockAmount = stock.data.amount;
  const currentAmount = productExists ? productExists.amount : 0;

  const amount = currentAmount + 1;
  if (amount > stockAmount) {
    console.tron.warn('ERRO');
    return;
  }

  if (productExists) {
    const ammount = productExists.amount + 1;
    yield put(updateAmount(id, ammount));
  } else {
    const response = yield call(api.get, `/products/${id}`);

    const data = {
      ...response.data,
      amount: 1,
      priceFormatted: formatPrice(response.data.price),
    };

    yield put(addToCartSuccess(data));
  }
}

export default all([takeLatest(types.ADD, addtoCart)]);
