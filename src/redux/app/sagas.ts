import {fork, put, takeLatest} from 'redux-saga/effects';
import {saveMoves, getMoves} from './actions';

/**
 * Obtener hobbies
 * @param {ReturnType<typeof getHobbies>}
 */
function* getMovesSaga() {
  yield put(saveMoves());
}

/**
 *
 * WATCHERS
 *
 */
function* watchGetMovesSaga() {
  yield takeLatest(getMoves, getMovesSaga);
}

const appSagas = [watchGetMovesSaga].map(fork);

export {appSagas};
