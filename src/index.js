import readlineSync from 'readline-sync';

const questionsCount = 3;

export default (task, createQuestionAnswer) => {
  console.log('Welcome to the Brain Games!');
  console.log(task);
  const userName = readlineSync.question('\nMay I have your name? ');
  console.log(`Hello, ${userName}!`);
  for (let i = 0; i < questionsCount; i += 1) {
    const [question, correctAnswer] = createQuestionAnswer();
    console.log(`\nQuestion: ${question}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer;(. Correct answer was '${correctAnswer}'`);
      console.log(`Let,s try again, ${userName}!`);
      return;
    }
  }
  console.log(`\nCongratulation, ${userName}!`);
};
