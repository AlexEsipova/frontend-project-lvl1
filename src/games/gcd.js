import _ from 'lodash';
import gameEngine from '../constructor';

const task = 'Find the greatest common divisor of given numbers.\n';
const findDiv = (num1, num2) => {
  let counter = num1;
  for (; ; counter -= 1) {
    if (num1 % counter === 0 && num2 % counter === 0) break;
  }
  return String(counter);
};

const getGameData = () => {
  const values = () => _.random(1, 10);
  const first = values();
  const second = values();
  const actualQuestion = `${first} ${second}`;
  const correctAnswer = (first <= second) ? findDiv(first, second) : findDiv(second, first);
  const gameData = [actualQuestion, correctAnswer];
  return gameData;
};

export default () => gameEngine(task, getGameData);
