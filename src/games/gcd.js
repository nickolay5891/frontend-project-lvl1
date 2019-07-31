import game, { getRandomNumber } from '..';

const task = 'Find the greatest common divisor of given numbers.';
const createQuestionAnswer = () => {
  const RandomNumber1 = getRandomNumber(0, 100);
  const RandomNumber2 = getRandomNumber(0, 100);
  const question = `${RandomNumber1} ${RandomNumber2}`;
  const searchGcd = (a, b) => {
    if (b === 0) {
      return a;
    }
    return searchGcd(b, a % b);
  };
  const correctAnswer = `${searchGcd(RandomNumber1, RandomNumber2)}`;
  return [question, correctAnswer];
};
export default () => game(task, createQuestionAnswer);
