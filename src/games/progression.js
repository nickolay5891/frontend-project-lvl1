import game from '..';
import getRandomNumber from '../utils';

const task = 'What number is missing in the progression?';
const createQuestionAnswer = () => {
  const firstNumberProgression = getRandomNumber(0, 10);
  const stepProgression = getRandomNumber(1, 10);
  const progressionLength = 10;
  const progression = [];
  for (let i = 0; i < progressionLength; i += 1) {
    progression[i] = firstNumberProgression + stepProgression * i;
  }
  const hiddenNumberIndex = getRandomNumber(0, progressionLength - 1);
  const correctAnswer = `${progression[hiddenNumberIndex]}`;
  progression.splice(hiddenNumberIndex, 1, '..');
  const question = `${progression.join(' ')}`;
  return [question, correctAnswer];
};
export default () => game(task, createQuestionAnswer);
