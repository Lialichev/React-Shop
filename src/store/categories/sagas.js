import {
  takeEvery,
  put,
  all,
} from 'redux-saga/effects';

import {
  updateCategory as updateCategoryService,
  getCategories as getList,
} from 'services';

import {
  UPDATE_CATEGORIES,
  GET_CATEGORIES,
  setCatigories,
  getCategories,
} from './actions';

function* fetchCategories() {
  const categories = yield getList();
  yield put(setCatigories(categories));
}

function* putCategory({data}) {
  try {
    yield updateCategoryService(data);
    yield put(getCategories());
  } catch (e) {
  }
}

export function* watchCategories() {
  yield all([
    takeEvery(GET_CATEGORIES, fetchCategories),
    takeEvery(UPDATE_CATEGORIES, putCategory),
  ]);
}
