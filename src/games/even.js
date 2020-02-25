import { getRandomNum, checkTrueOrFalse } from '../utils';
import gameEngine from '..';

const isEven = (num) => num % 2 === 0;
const task = 'Answer "yes" if the number is even, otherwise answer "no".';
const getGameData = () => {
  const actualQuestion = getRandomNum();
  const correctAnswer = checkTrueOrFalse(isEven(actualQuestion));
  const gameData = [actualQuestion, correctAnswer];
  return gameData;
};

export default () => gameEngine(task, getGameData);
