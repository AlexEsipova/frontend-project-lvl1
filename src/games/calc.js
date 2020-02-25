import _ from 'lodash';
import getRandomNum from '../utils';
import gameEngine from '..';

const task = 'What is the result of the expression?';
const operations = ['+', '-', '*'];

const getGameData = () => {
  const getOperation = () => operations[_.random(0, operations.length - 1)];
  const firstValue = getRandomNum();
  const secondValue = getRandomNum();
  const actualOperation = getOperation();
  const actualQuestion = `${firstValue} ${actualOperation} ${secondValue}`;
  let correctAnswer;
  switch (actualOperation) {
    case '+':
      correctAnswer = firstValue + secondValue;
      break;
    case '-':
      correctAnswer = firstValue - secondValue;
      break;
    case '*':
      correctAnswer = firstValue * secondValue;
      break;
    default:
      break;
  }
  const gameData = [actualQuestion, String(correctAnswer)];
  return gameData;
};

export default () => gameEngine(task, getGameData);
