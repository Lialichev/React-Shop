import {
  takeEvery,
  put,
  all
} from 'redux-saga/effects';

import { getProducts } from 'services';

import {
  GET_PRODUCT,
  setProduct
} from './actions';

export function* fetchProduct({ data }) {
  try {
    const product = yield getProducts(data);
    yield put(setProduct(product));
  } catch (e) {}
}

export function* watchProduct() {
  yield all([
    takeEvery(GET_PRODUCT, fetchProduct),
  ]);
}
