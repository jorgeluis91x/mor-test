import {createAction} from 'redux-act';

/**
 *
 * Actions to update store :v
 *
 * */

/** Get moves from api */
const getMoves = createAction('app/get moves');

/** Save moves on store */
const saveMoves = createAction('app/save moves');

/***/

export {getMoves, saveMoves};
