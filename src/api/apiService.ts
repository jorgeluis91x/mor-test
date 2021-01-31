import * as categories from '../../assets/data/categories.json';
import * as routines from '../../assets/data/routines.json';
const delay = (timeout: number) =>
  new Promise((resolve) => {
    setTimeout(resolve, timeout);
  });

const getCategoriesApi = async () => {
  return delay(1000).then(() => categories);
};

const getRoutinesApi = async () => {
  return delay(1000).then(() => routines);
};

const changeRoutinePrivacity = async (id: String) => {
  return delay(1000).then(() => true);
};

export {getCategoriesApi, getRoutinesApi, changeRoutinePrivacity};
