import _ from 'lodash';
import gameEngine from '../constructor';

const task = 'What is the result of the expression?';
const operations = ['+', '-', '*'];
const getGameData = () => {
  const getRamdomNum = () => _.random(1, 10);
  const getOperation = () => operations[_.random(0, operations.length - 1)];
  const firstValue = getRamdomNum();
  const secondValue = getRamdomNum();
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
