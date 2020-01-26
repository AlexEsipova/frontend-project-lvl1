
import readlineSync from 'readline-sync';

const step = 3;

const gameEngine = (task, getGameData) => {
  console.log('Welcome to the Brain Games!');
  console.log(`${task}`);
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!\n`);
  for (let counter = 1; counter <= step; counter += 1) {
    const [actualQuestion, correctAnswer] = getGameData();
    console.log(`Question: ${actualQuestion}`);
    const answer = readlineSync.question('Your answer: ');
    if (correctAnswer === answer) {
      console.log('Correct!');
      if (counter === 3) {
        console.log(`Congratulations, ${userName}!`);
      }
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      break;
    }
  }
};

export default gameEngine;
