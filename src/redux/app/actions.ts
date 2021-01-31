import {createAction} from 'redux-act';

/**
 *
 * Actions to update store :v
 *
 * */

/** Get routines from api */
const getMoves = createAction('app/get moves');

const getCategories = createAction('app/get categories');

/** Save moves on store */
const saveMoves = createAction<any>('app/save moves');

const saveCategories = createAction<any>('app/save categories');

const changeMovePrivacity = createAction<{id: string}>(
  'app/change move privacity',
);

const updatePrivacityMove = createAction<{id: string}>(
  'app/update move privacity',
);

/***/

export {
  getMoves,
  saveMoves,
  getCategories,
  saveCategories,
  changeMovePrivacity,
  updatePrivacityMove,
};
