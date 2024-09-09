import quizCompleteImg from '../assets/quiz-complete.png';
import QUESTIONS from '../util/questions.js';

export default function Summary({ userAnswers }) {

  const skippedAnswers = userAnswers.filter((answer) => answer === null);
  const getAnswerLabel = (answer) => answer?.label || answer;

const correctAnswers = userAnswers.filter((answer, index) => { 
  const correctIndices = QUESTIONS[index].correctAnswer; // index of correct answer can be an array of indexes
  const userAnswer = getAnswerLabel(answer);

  if (userAnswer === null) return false;

  const isCorrect = Array.isArray(correctIndices)
    ? correctIndices.some(ca => getAnswerLabel(QUESTIONS[index].answers[ca]) === userAnswer)
    : getAnswerLabel(QUESTIONS[index].answers[correctIndices]) === userAnswer;

  return isCorrect;
});

  const skippedAnswersShare = Math.round(
    (skippedAnswers.length / userAnswers.length) * 100
  );
  const correctAnswersShare = Math.round(
    (correctAnswers.length / userAnswers.length) * 100
  );
  const wrongAnswersShare = 100 - skippedAnswersShare - correctAnswersShare;

  

// Helper function to determine CSS class based on answer correctness
const getCssClass = (answer, correctIndices, question) => {
  let cssClass = 'user-answer';
  if (answer === null) {
    return `${cssClass} skipped`;
  }

  const userAnswer = getAnswerLabel(answer);
  const isCorrect = Array.isArray(correctIndices)
    ? correctIndices.some(index => getAnswerLabel(question.answers[index]) === userAnswer)
    : getAnswerLabel(question.answers[correctIndices]) === userAnswer;

  return `${cssClass} ${isCorrect ? 'correct' : 'wrong'}`;
};

return (
  <div id="summary">
    <img src={quizCompleteImg} alt="Trophy icon" />
    <h2>Quiz Completed!</h2>
    <div id="summary-stats">
      <p>
        <span className="number">{skippedAnswersShare}%</span>
        <span className="text">skipped</span>
      </p>
      <p>
        <span className="number">{correctAnswersShare}%</span>
        <span className="text">answered correctly</span>
      </p>
      <p>
        <span className="number">{wrongAnswersShare}%</span>
        <span className="text">answered incorrectly</span>
      </p>
    </div>
    <ol>
      {userAnswers.map((answer, index) => {
        const question = QUESTIONS[index];
        const correctIndices = question.correctAnswer;
        const cssClass = getCssClass(answer, correctIndices, question);

        return (
          <li key={index}>
            <h3>{index + 1}</h3>
            <p className="question">{question.text}</p>
            {question.code && <pre className="jscode">{question.code}</pre>}
            <p className={cssClass}>
              {answer ? getAnswerLabel(answer) : 'Skipped'}
            </p>
            {answer?.code && <pre className="jscode">{answer.code}</pre>}
          </li>
        );
      })}
    </ol>
  </div>
);
}