import _ from 'lodash';
import readlineSync from 'readline-sync';

const isEven = (num) => num % 2 === 0;
const task = 'Answer "yes" if the number is even, otherwise answer "no".\n';
const question = () => _.random(1, 1000);
const step = 3;

const brainEven = () => {
  console.log('Welcome to the Brain Games!');
  console.log(`${task}`);
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!\n`);
  for (let counter = 1; counter <= step; counter += 1) {
    const actualQuestion = question();
    console.log(`Question: ${actualQuestion}`);
    const correctAnswer = isEven(actualQuestion) ? 'yes' : 'no';
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

export default brainEven;
