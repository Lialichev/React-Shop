import { all } from 'redux-saga/effects';

import { watchUser } from './user';
import { watchCategory } from './category';
import { watchCategories } from './categories';
import { watchProducts } from './products';

export function* rootSaga() {
  yield all([
    watchUser(),
    watchCategory(),
    watchCategories(),
    watchProducts(),
  ]);
}
