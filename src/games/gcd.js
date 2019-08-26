import game from '..';
import getRandomNumber from '../utils';

const task = 'Find the greatest common divisor of given numbers.';
const searchGcd = (a, b) => {
  if (b === 0) {
    return a;
  }
  return searchGcd(b, a % b);
};
const createQuestionAnswer = () => {
  const number1 = getRandomNumber(0, 100);
  const number2 = getRandomNumber(0, 100);
  const question = `${number1} ${number2}`;
  const correctAnswer = searchGcd(number1, number2).toString();
  return [question, correctAnswer];
};
export default () => game(task, createQuestionAnswer);
