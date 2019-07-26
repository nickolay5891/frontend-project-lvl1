import game, { getRandomNumber } from '..';

const rulesGamePrime = 'Answer "yes" if given number is prime. Otherwise answer "no"';
const createQuestionAnswerPrime = () => {
  const primeNumber = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37,
    41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];
  const questionsPrime = getRandomNumber(0, 100);
  let prime = 0;
  for (let i = 0; i < primeNumber.length; i += 1) {
    if (primeNumber[i] === questionsPrime) {
      prime += 1;
    }
  }
  const correctAnswerPrime = (prime === 1) ? 'yes' : 'no';
  return [questionsPrime, correctAnswerPrime];
};
export default () => game(rulesGamePrime, createQuestionAnswerPrime);
