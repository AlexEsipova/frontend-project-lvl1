import _ from 'lodash';

export const getRandomNum = () => _.random(1, 100);
export const checkTrueOrFalse = (func) => {
  if (func === true) {
    return 'yes';
  }
  return 'no';
};
