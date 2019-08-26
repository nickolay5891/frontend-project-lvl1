import game from '..';
import getRandomNumber from '../utils';

const task = 'Answer "yes" if number even otherwise answer "no".';
const isEven = number => number % 2 === 0;
const createQuestionAnswer = () => {
  const question = getRandomNumber(-99, 99);
  const correctAnswer = isEven(question) ? 'yes' : 'no';
  return [question, correctAnswer];
};
export default () => game(task, createQuestionAnswer);
