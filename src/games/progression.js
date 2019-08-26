import game from '..';
import getRandomNumber from '../utils';

const progressionLength = 10;

const task = 'What number is missing in the progression?';
const createQuestionAnswer = () => {
  const firstElement = getRandomNumber(0, 10);
  const step = getRandomNumber(1, 10);
  const progression = [];
  for (let i = 0; i < progressionLength; i += 1) {
    progression[i] = firstElement + step * i;
  }
  const hiddenElementIndex = getRandomNumber(0, progressionLength - 1);
  const correctAnswer = progression[hiddenElementIndex].toString();
  progression.splice(hiddenElementIndex, 1, '..');
  const question = progression.join(' ');
  return [question, correctAnswer];
};
export default () => game(task, createQuestionAnswer);
