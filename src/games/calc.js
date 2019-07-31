import game, { getRandomNumber } from '..';

const task = 'What is the result of the expression?';
const createQuestionAnswer = () => {
  const actions = ['+', '-', '*'];
  const numberAction = getRandomNumber(0, actions.length - 1);
  const action = actions[numberAction];
  const number1 = getRandomNumber(0, 30);
  const number2 = getRandomNumber(0, 30);
  const question = `${number1} ${action} ${number2}`;
  let correctAnswer;
  switch (action) {
    case '+':
      correctAnswer = `${number1 + number2}`;
      break;
    case '-':
      correctAnswer = `${number1 - number2}`;
      break;
    default:
      correctAnswer = `${number1 * number2}`;
  }
  return [question, correctAnswer];
};
export default () => game(task, createQuestionAnswer);
