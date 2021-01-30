import {enableES5, produce} from 'immer';

import {createReducer} from 'redux-act';

import {saveMoves} from './actions';
import {appInitialState} from './initial-state';
enableES5();

const appReducer = createReducer<{name: string}>({}, appInitialState);

/** Reducer para mostrar error modal */
appReducer.on(saveMoves, (state) => {
  return produce(state, (draftState) => {
    draftState.name = 'test';
  });
});

export {appReducer};
