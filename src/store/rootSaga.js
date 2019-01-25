import { all, put } from 'redux-saga/effects';

import { watchUser } from './user';
import { watchCategory } from './category';
import { watchCategories } from './categories';
import { watchProducts } from './products';
import { setError } from './status'

export function* rootSaga() {
  // try {
  //   yield all([
  //     watchUser(),
  //     watchCategory(),
  //     watchCategories(),
  //     watchProducts(),
  //   ]);
  // } catch (err) {
  //   yield put(setError(err));
  // }
  yield all([
    watchUser(),
    watchCategory(),
    watchCategories(),
    watchProducts(),
  ]);
}
