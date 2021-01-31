import {call, fork, put, takeLatest} from 'redux-saga/effects';
import {changeRoutinePrivacity, getCategoriesApi, getRoutinesApi} from '../../api/apiService';
import {
  saveMoves,
  getMoves,
  saveCategories,
  getCategories,
  changeMovePrivacity,
  updatePrivacityMove,
} from './actions';

/**
 * Obtener hobbies
 * @param {ReturnType<typeof getHobbies>}
 */
function* getMovesSaga() {
  try {
    const moves = yield call(getRoutinesApi);
    yield put(saveMoves(moves));
  } catch (error) {
    console.error(error);
  }
}

function* getCategoriesSaga() {
  try {
    const categories = yield call(getCategoriesApi);
    yield put(saveCategories(categories));
  } catch (error) {
    console.error(error);
  }
}

function* changeMovePrivacitySaga({
  payload,
}: ReturnType<typeof changeMovePrivacity>) {
  console.log('payload',payload)
  try {
    const response = yield call(changeRoutinePrivacity, payload.id);
    if (response) {
      yield put(updatePrivacityMove(payload));
    }
  } catch (error) {
    console.error(error);
  }
}

/**
 *
 * WATCHERS
 *
 */
function* watchGetMovesSaga() {
  yield takeLatest(getMoves, getMovesSaga);
}
function* watchGetCategoriesSaga() {
  yield takeLatest(getCategories, getCategoriesSaga);
}

function* watchChangeMovePrivacitySaga() {
  yield takeLatest(changeMovePrivacity, changeMovePrivacitySaga);
}

const appSagas = [
  watchGetMovesSaga,
  watchGetCategoriesSaga,
  watchChangeMovePrivacitySaga,
].map(fork);

export {appSagas};
