import {
  takeEvery,
  put,
  all
} from 'redux-saga/effects';

import { createUser } from 'services';

import {
  CREATE_USER,
  setCreateUser
} from './actions';

function* createSaga({data}) {
  try {
    const user = yield createUser(data);
    yield put(setCreateUser(user));
  } catch (err) {}
}

export function* watchCreateUser() {
  yield all([
    takeEvery(CREATE_USER, createSaga)
  ]);
}
