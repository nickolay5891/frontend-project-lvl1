import game, { getRandomNumber } from '..';

const rulesGameGcd = 'Find the greatest common divisor of given numbers.';
const createQuestionAnswerGcd = () => {
  const RandomNumber1 = getRandomNumber(0, 100);
  const RandomNumber2 = getRandomNumber(0, 100);
  const questionsGcd = `${RandomNumber1} ${RandomNumber2}`;
  const searchGcd = (a, b) => {
    if (b === 0) {
      return a;
    }
    return searchGcd(b, a % b);
  };
  const correctAnswerGcd = `${searchGcd(RandomNumber1, RandomNumber2)}`;
  return [questionsGcd, correctAnswerGcd];
};
export default () => game(rulesGameGcd, createQuestionAnswerGcd);
