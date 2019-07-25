import game, { getRandomNumber } from '..';

const rulesGameGcd = 'What number is missing in the progression?';
const createQuestionAnswerGcd = () => {
  const firstNumberProgression = getRandomNumber(0, 10);
  const stepProgression = getRandomNumber(1, 10);
  const progressionLength = 10;
  const progression = [firstNumberProgression];
  for (let i = 1; i < progressionLength; i += 1) {
    progression[i] = progression[i - 1] + stepProgression;
  }
  const index = getRandomNumber(0, progressionLength - 1);
  const correctAnswerGcd = `${progression[index]}`;
  progression.splice(index, 1, '..');
  const questionsGcd = `${progression.join(' ')}`;
  return [questionsGcd, correctAnswerGcd];
};
export default () => game(rulesGameGcd, createQuestionAnswerGcd);
