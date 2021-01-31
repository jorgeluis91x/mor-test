import {enableES5, produce} from 'immer';

import {createReducer} from 'redux-act';

import {saveCategories, saveMoves, updatePrivacityMove} from './actions';
import {appInitialState} from './initial-state';
enableES5();

const appReducer = createReducer<{moves: any; categories: any}>(
  {},
  appInitialState,
);

/** Reducer to save moves */
appReducer.on(saveMoves, (state, payload) => {
  return produce(state, (draftState) => {
    draftState.moves = payload;
  });
});

/** Reducer to save categories */
appReducer.on(saveCategories, (state, payload) => {
  return produce(state, (draftState) => {
    draftState.categories = payload;
  });
});

appReducer.on(updatePrivacityMove, (state, payload) => {
  console.log('va a guardar',payload)
  return produce(state, (draftState) => {
    draftState.moves[payload.id].public = !draftState.moves[payload.id].public;
  });
});

export {appReducer};
