import getRandomNum from '../utils';
import gameEngine from '..';

const isPrime = (num) => {
  if (num < 2) {
    return false;
  }
  if (num === 2) {
    return true;
  }
  for (let divisor = 2; divisor < num / 2; divisor += 1) {
    if (num % divisor === 0) {
      return false;
    }
  }
  return true;
};
const task = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const getGameData = () => {
  const actualQuestion = getRandomNum();
  const correctAnswer = isPrime(actualQuestion) ? 'yes' : 'no';
  const gameData = [actualQuestion, correctAnswer];
  return gameData;
};

export default () => gameEngine(task, getGameData);
