import {RootState} from '../reducer';

/**
 * Get Moves
 *
 * @param {RootState} state
 * @return {*}  {string[]}
 */
function getMovesToShow(state: RootState): any[] {
  const moves = state.app.moves;

  const movesToShow = [];
  movesToShow.push({timeofDay: 'Morning', moves: filterBy(moves, 1)});
  movesToShow.push({timeofDay: 'Afternoon', moves: filterBy(moves, 2)});
  movesToShow.push({timeofDay: 'Evening', moves: filterBy(moves, 3)});
  return movesToShow;
}

function filterBy(object: any, value: number) {
  const arrayKeys = Object.keys(object);
  const arrayReturn: any = [];

  arrayKeys.map((key) => {
    if (object[key].time_of_day === value) arrayReturn.push(object[key]);
  });
  return arrayReturn;
}

export {getMovesToShow};
