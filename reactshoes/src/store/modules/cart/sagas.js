import { call, put, all, takeLatest } from 'redux-saga/effects';

import { types, addToCartSuccess } from './actions';
import api from '../../../services/api';

function* addtoCart({ id }) {
  const response = yield call(api.get, `/products/${id}`);
  yield put(addToCartSuccess(response.data));
}

export default all([takeLatest(types.ADD, addtoCart)]);
