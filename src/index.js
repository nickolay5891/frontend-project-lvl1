import readlineSync from 'readline-sync';

export const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const game = (rulesGame, createQuestionAnswer) => {
  console.log('Welcome to the Brain Games!');
  console.log(rulesGame);
  const userName = readlineSync.question('\nMay I have your name? ');
  console.log(`Hello, ${userName}!`);
  let n = 0;
  while (n < 3) {
    const QuestionAnswer = createQuestionAnswer();
    const question = QuestionAnswer[0];
    const correctAnswer = QuestionAnswer[1];
    console.log(`\nQuestion: ${question}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer === correctAnswer) {
      console.log('Correct!');
      n += 1;
    } else {
      console.log(`'${answer}' is wrong answer;(. Correct answer was '${correctAnswer}'`);
      console.log(`Let,s try again, ${userName}!`);
    }
  }
  console.log(`\nCongratulation, ${userName}!`);
};

export default game;
