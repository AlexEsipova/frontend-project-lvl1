import _ from 'lodash';
import gameEngine from '../constructor';

const task = 'What number is missing in the progression?';
const getRandomNum = () => _.random(1, 10);
const getRandomNumForChangingValueInArr = () => _.random(1, 9);


const getGameData = () => {
  const firstValue = getRandomNum();
  const step = getRandomNum();
  const iChange = getRandomNumForChangingValueInArr();
  const arr = [firstValue];
  for (let i = 0; i < 10; i += 1) {
    arr[i] = firstValue + step * i;
  }
  const correctAnswer = arr[iChange];
  arr[iChange] = '..';
  const actualQuestion = arr.join(' ');
  const gameData = [actualQuestion, String(correctAnswer)];
  return gameData;
};

export default () => gameEngine(task, getGameData);
