import { all } from 'redux-saga/effects';

import watchUser from './user';
import watchCategory from './category';

export function* rootSaga() {
  yield all([
    watchUser(),
    watchCategory(),
  ]);
}
