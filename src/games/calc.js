import _ from 'lodash';
import gameEngine from '../constructor';

const task = 'What is the result of the expression?\n';
const operations = ['+', '-', '*'];
const getGameData = () => {
  const values = () => _.random(1, 10);
  const operation = () => operations[_.random(0, operations.length - 1)];
  const firstValue = values();
  const secondValue = values();
  const actualOperation = operation();
  const actualQuestion = `${firstValue} ${actualOperation} ${secondValue}`;
  let correctAnswer;
  switch (actualOperation) {
    case '+':
      correctAnswer = (String(firstValue + secondValue));
      break;
    case '-':
      correctAnswer = (String(firstValue - secondValue));
      break;
    case '*':
      correctAnswer = (String(firstValue * secondValue));
      break;
    default:
      break;
  }
  const gameData = [actualQuestion, correctAnswer];
  return gameData;
};

export default () => gameEngine(task, getGameData);
