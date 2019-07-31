import game, { getRandomNumber } from '..';

const task = 'Answer "yes" if given number is prime. Otherwise answer "no"';
const isPrime = (number) => {
  if (number < 2) {
    return false;
  }
  for (let i = 2; i <= number / 2; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};
const createQuestionAnswer = () => {
  const question = getRandomNumber(0, 100);
  const correctAnswer = (isPrime(question)) ? 'yes' : 'no';
  return [question, correctAnswer];
};
export default () => game(task, createQuestionAnswer);
