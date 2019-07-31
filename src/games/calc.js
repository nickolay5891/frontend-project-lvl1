import game, { getRandomNumber } from '..';

const task = 'What is the result of the expression?';
const createQuestionAnswer = () => {
  const actions = ['+', '-', '*'];
  const numberAction = getRandomNumber(0, actions.length - 1);
  const action = actions[numberAction];
  const RandomNumber1 = getRandomNumber(0, 30);
  const RandomNumber2 = getRandomNumber(0, 30);
  const question = `${RandomNumber1} ${action} ${RandomNumber2}`;
  let correctAnswer;
  switch (action) {
    case '+':
      correctAnswer = `${RandomNumber1 + RandomNumber2}`;
      break;
    case '-':
      correctAnswer = `${RandomNumber1 - RandomNumber2}`;
      break;
    default:
      correctAnswer = `${RandomNumber1 * RandomNumber2}`;
  }
  return [question, correctAnswer];
};
export default () => game(task, createQuestionAnswer);
