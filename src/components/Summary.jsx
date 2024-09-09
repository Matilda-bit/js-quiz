import quizCompleteImg from '../assets/quiz-complete.png';
import QUESTIONS from '../util/questions.js';

export default function Summary({ userAnswers }) {
  console.log(userAnswers);
  const skippedAnswers = userAnswers.filter((answer) => answer === null);
  const correctAnswers = userAnswers.filter(
    
    (answer, index) => { 
      const correctIndex = QUESTIONS[index].correctAnswer; //always return index of correct answer - can be an array

      if(answer === null) {
        return false;
      }

      let ans;
      let isCorrect;
      let correctAns;
      // Check if correctAnswer is an array
      if (Array.isArray(correctIndex)) {
        // Check if the selected answer is in the array of correct answers
        isCorrect = correctIndex.some(ca => {
            correctAns = QUESTIONS[index].answers[ca].label ? QUESTIONS[index].answers[ca].label : QUESTIONS[index].answers[ca];
            ans = answer.label ? answer.label : answer;
            return ans === correctAns;
        });
      } else {
          correctAns = QUESTIONS[index].answers[correctIndex].label ? QUESTIONS[index].answers[correctIndex].label : QUESTIONS[index].answers[correctIndex];
          ans = answer.label ? answer.label : answer;
          isCorrect = correctAns === ans;
      }

      return isCorrect;
    }
  );

  const skippedAnswersShare = Math.round(
    (skippedAnswers.length / userAnswers.length) * 100
  );
  const correctAnswersShare = Math.round(
    (correctAnswers.length / userAnswers.length) * 100
  );
  const wrongAnswersShare = 100 - skippedAnswersShare - correctAnswersShare;

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
          let cssClass = 'user-answer';
          const correctIndex = QUESTIONS[index].correctAnswer;

          if (answer === null) {
            cssClass += ' skipped';
          } else {
            let ans;
            let isCorrect;
            let correctAns;
            // Check if correctAnswer is an array
            if (Array.isArray(correctIndex)) {
              // Check if the selected answer is in the array of correct answers
              isCorrect = correctIndex.some(ca => {
                  correctAns = QUESTIONS[index].answers[ca].label ? QUESTIONS[index].answers[ca].label : QUESTIONS[index].answers[ca];
                  ans = answer.label ? answer.label : answer;
                  return ans === correctAns;
              });
            } else if (answer !== null) {
                correctAns = QUESTIONS[index].answers[correctIndex].label ? QUESTIONS[index].answers[correctIndex].label : QUESTIONS[index].answers[correctIndex];
                ans = answer.label ? answer.label : answer;
                isCorrect = correctAns === ans;
            }
            
            if (isCorrect) {
              cssClass += ' correct';
            } else {
              cssClass += ' wrong';
            }
          }

          return (
            <li key={index}>
              <h3>{index + 1}</h3>
              <p className="question">{QUESTIONS[index].text}</p>
              {QUESTIONS[index].code && 
                <pre className="jscode">{QUESTIONS[index].code}</pre>}
              <p className={cssClass}>
                {answer ? (answer.label ?
                (<span>{answer.label}</span>) 
                :
                answer
                )
                : 
                'Skipped'}
                </p>

                {
                  answer && answer.code ?
                  (<>
                  <pre className="jscode">{answer.code}</pre></>) 
                  :
                  null
                }
            </li>
          );
        })}
      </ol>
    </div>
  );
}