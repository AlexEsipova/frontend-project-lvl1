import _ from 'lodash';
import gameEngine from '../constructor';

const isEven = (num) => num % 2 === 0;
const task = 'Answer "yes" if the number is even, otherwise answer "no".';
const getRandomNum = () => _.random(1, 1000);
const getGameData = () => {
  const actualQuestion = getRandomNum();
  const correctAnswer = isEven(actualQuestion) ? 'yes' : 'no';
  const gameData = [actualQuestion, correctAnswer];
  return gameData;
};

export default () => gameEngine(task, getGameData);
