import game, { getRandomNumber } from '..';

const task = 'What number is missing in the progression?';
const createQuestionAnswerProgression = () => {
  const firstNumberProgression = getRandomNumber(0, 10);
  const stepProgression = getRandomNumber(1, 10);
  const progressionLength = 10;
  const progression = [firstNumberProgression];
  for (let i = 1; i < progressionLength; i += 1) {
    progression[i] = progression[i - 1] + stepProgression;
  }
  const index = getRandomNumber(0, progressionLength - 1);
  const correctAnswerProgression = `${progression[index]}`;
  progression.splice(index, 1, '..');
  const questionsProgression = `${progression.join(' ')}`;
  return [questionsProgression, correctAnswerProgression];
};
export default () => game(task, createQuestionAnswerProgression);
