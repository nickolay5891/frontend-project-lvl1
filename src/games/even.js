import game, { getRandomNumber } from '..';

const task = 'Answer "yes" if number even otherwise answer "no".';
const createQuestionAnswerEven = () => {
  const questionsEven = getRandomNumber(-99, 99);
  const correctAnswerEven = (questionsEven % 2 === 0) ? 'yes' : 'no';
  return [questionsEven, correctAnswerEven];
};
export default () => game(task, createQuestionAnswerEven);
