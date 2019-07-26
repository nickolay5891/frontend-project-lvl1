import readlineSync from 'readline-sync';

export const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

export default (rulesGame, createQuestionAnswer) => {
  console.log('Welcome to the Brain Games!');
  console.log(rulesGame);
  const userName = readlineSync.question('\nMay I have your name? ');
  console.log(`Hello, ${userName}!`);
  let NumberOfQuestions = 0;
  while (NumberOfQuestions < 3) {
    const QuestionAnswer = createQuestionAnswer();
    const question = QuestionAnswer[0];
    const correctAnswer = QuestionAnswer[1];
    console.log(`\nQuestion: ${question}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer === correctAnswer) {
      console.log('Correct!');
      NumberOfQuestions += 1;
    } else {
      console.log(`'${answer}' is wrong answer;(. Correct answer was '${correctAnswer}'`);
      console.log(`Let,s try again, ${userName}!`);
      return;
    }
  }
  console.log(`\nCongratulation, ${userName}!`);
};
