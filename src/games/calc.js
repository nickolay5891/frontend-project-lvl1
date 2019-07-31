import game, { getRandomNumber } from '..';

const task = 'What is the result of the expression?';
const createQuestionAnswerCalc = () => {
  const allAction = ['+', '-', '*'];
  const numberAction = getRandomNumber(0, allAction.length - 1);
  const action = allAction[numberAction];
  const RandomNumber1 = getRandomNumber(0, 30);
  const RandomNumber2 = getRandomNumber(0, 30);
  const questionsCalc = `${RandomNumber1} ${action} ${RandomNumber2}`;
  let correctAnswerCalc;
  switch (numberAction) {
    case 0:
      correctAnswerCalc = `${RandomNumber1 + RandomNumber2}`;
      break;
    case 1:
      correctAnswerCalc = `${RandomNumber1 - RandomNumber2}`;
      break;
    default:
      correctAnswerCalc = `${RandomNumber1 * RandomNumber2}`;
  }
  return [questionsCalc, correctAnswerCalc];
};
export default () => game(task, createQuestionAnswerCalc);
