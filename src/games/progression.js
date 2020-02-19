import _ from 'lodash';
import getRandomNum from '../utils';
import gameEngine from '..';

const task = 'What number is missing in the progression?';


const getGameData = () => {
  const firstValue = getRandomNum();
  const step = getRandomNum();
  const seriesOfNum = [];
  const seriesOfNumLength = 10;
  for (let i = 0; i < seriesOfNumLength; i += 1) {
    seriesOfNum[i] = firstValue + step * i;
  }
  const getRandomNumForChangingValueInArr = () => _.random(0, seriesOfNum.length - 1);
  const iChange = getRandomNumForChangingValueInArr();
  const correctAnswer = seriesOfNum[iChange];
  seriesOfNum[iChange] = '..';
  const actualQuestion = seriesOfNum.join(' ');
  const gameData = [actualQuestion, String(correctAnswer)];
  return gameData;
};

export default () => gameEngine(task, getGameData);
