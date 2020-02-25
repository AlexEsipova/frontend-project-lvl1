import _ from 'lodash';
import getRandomNum from '../utils';
import gameEngine from '..';

const task = 'What number is missing in the progression?';
const progressionLength = 10;

const getGameData = () => {
  const firstValue = getRandomNum();
  const step = getRandomNum();
  const progression = [];
  for (let i = 0; i < progressionLength; i += 1) {
    progression[i] = firstValue + step * i;
  }
  const getRandomNumForChangingValueInArr = () => _.random(0, progression.length - 1);
  const iChange = getRandomNumForChangingValueInArr();
  const correctAnswer = progression[iChange];
  progression[iChange] = '..';
  const actualQuestion = progression.join(' ');
  const gameData = [actualQuestion, String(correctAnswer)];
  return gameData;
};

export default () => gameEngine(task, getGameData);
