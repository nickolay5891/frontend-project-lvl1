import game, { getRandomNumber } from '..';

const task = 'Answer "yes" if number even otherwise answer "no".';
const createQuestionAnswer = () => {
  const question = getRandomNumber(-99, 99);
  const correctAnswer = (question % 2 === 0) ? 'yes' : 'no';
  return [question, correctAnswer];
};
export default () => game(task, createQuestionAnswer);
