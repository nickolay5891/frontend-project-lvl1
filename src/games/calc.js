import game from '..';
import getRandomNumber from '../utils';

const task = 'What is the result of the expression?';
const operations = ['+', '-', '*'];

const createQuestionAnswer = () => {
  const operation = operations[getRandomNumber(0, operations.length - 1)];
  const number1 = getRandomNumber(0, 30);
  const number2 = getRandomNumber(0, 30);
  const question = `${number1} ${operation} ${number2}`;
  let answer;
  switch (operation) {
    case '+':
      answer = number1 + number2;
      break;
    case '-':
      answer = number1 - number2;
      break;
    default:
      answer = number1 * number2;
  }
  const correctAnswer = answer.toString();
  return [question, correctAnswer];
};
export default () => game(task, createQuestionAnswer);
