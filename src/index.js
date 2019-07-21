import readlineSync from 'readline-sync';

const giveName = () => {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
};

const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

export const gameEven = () => {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log();
  let n = 0;
  while (n < 3) {
    const RandomNumber = getRandomNumber(-99, 99);
    console.log(`Question: ${RandomNumber}`);
    const answer = readlineSync.question('Your answer: ');
    const correctAnswer = (RandomNumber % 2 === 0) ? 'yes' : 'no';
    if (answer === correctAnswer) {
      console.log('Correct!');
      n += 1;
    } else {
      console.log(`'${answer}' is wrong answer;(. Correct answer was '${correctAnswer}'`);
      console.log(`Let,s try again, ${userName}!`);
    }
  }
  console.log(`Congratulation, ${userName}!`);
};

export default giveName;
