import { all, put } from 'redux-saga/effects';

import { watchUser } from './user';
import { watchCategory } from './category';
import { watchCategories } from './categories';
import { watchProducts } from './products';
import { watchProduct } from './product';
import { watchCreateUser } from './createUser';
import { setError } from './status'

export function* rootSaga() {
  yield all([
    watchUser(),
    watchCategory(),
    watchCategories(),
    watchProducts(),
    watchProduct(),
    watchCreateUser(),
  ]);
}
