import game from '..';
import getRandomNumber from '../utils';

const task = 'What is the result of the expression?';
const createQuestionAnswer = () => {
  const operations = ['+', '-', '*'];
  const operation = operations[getRandomNumber(0, operations.length - 1)];
  const number1 = getRandomNumber(0, 30);
  const number2 = getRandomNumber(0, 30);
  const question = `${number1} ${operation} ${number2}`;
  let correctAnswer;
  switch (operation) {
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
