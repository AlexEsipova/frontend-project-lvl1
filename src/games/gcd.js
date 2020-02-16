import _ from 'lodash';
import gameEngine from '../constructor';

const task = 'Find the greatest common divisor of given numbers.';
const findGreatestCommonDiv = (num1, num2) => {
  let counter = num1;
  for (counter = num1; ; counter -= 1) {
    if (num1 % counter === 0 && num2 % counter === 0) break;
  }
  return counter;
};

const getGameData = () => {
  const getRandomNum = () => _.random(1, 10);
  const first = getRandomNum();
  const second = getRandomNum();
  const actualQuestion = `${first} ${second}`;
  const correctAnswer = (first <= second)
    ? findGreatestCommonDiv(first, second)
    : findGreatestCommonDiv(second, first);
  const gameData = [actualQuestion, String(correctAnswer)];
  return gameData;
};

export default () => gameEngine(task, getGameData);
