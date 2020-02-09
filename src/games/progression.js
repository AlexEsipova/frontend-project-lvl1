import _ from 'lodash';
import gameEngine from '../constructor';

const task = 'What number is missing in the progression?\n';
const values = () => _.random(1, 10);
const valuesForI = () => _.random(1, 9);


const getGameData = () => {
  const firstValue = values();
  const step = values();
  const iChange = valuesForI();
  const arr = [firstValue];
  for (let i = 1; i < 10; i += 1) {
    arr[i] = arr[i - 1] + step;
  }
  const correctAnswer = String(arr[iChange]);
  arr[iChange] = '..';
  const actualQuestion = arr.join(' ');
  const gameData = [actualQuestion, correctAnswer];
  return gameData;
};

export default () => gameEngine(task, getGameData);
