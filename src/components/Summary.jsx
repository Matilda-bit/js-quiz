import quizCompleteImg from '../assets/quiz-complete.png';
import QUESTIONS from '../util/questions.js';

export default function Summary({ userAnswers }) {
  console.log(userAnswers);
  const skippedAnswers = userAnswers.filter((answer) => answer === null);
  const correctAnswers = userAnswers.filter(
    
    (answer, index) => { 
      //polina
      const correctIndex = QUESTIONS[index].correctAnswer; //always return index of correct answer - can be an array
      if(Array.isArray(correctIndex)) {
        console.log("correctIndex it is an array");
        console.log(correctIndex);
        console.log("index" + index);
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
      } else if (answer !== null) {
          correctAns = QUESTIONS[index].answers[correctIndex].label ? QUESTIONS[index].answers[correctIndex].label : QUESTIONS[index].answers[correctIndex];
          ans = answer.label ? answer.label : answer;
          isCorrect = correctAns === ans;
      }

  
      // console.log("index of answer:");
      // // console.log(answer);
      // console.log(index);
      // //correctAns = QUESTIONS[index].answers[correctIndex].label ? QUESTIONS[index].answers[correctAnswer].label : QUESTIONS[index].answers[correctAnswer];
        
      // //console.log(QUESTIONS[index].answers[correctIndex]);
      // if (Array.isArray(answer)) {
      //   console.log("aswer this is an array!");
      // }


      // if(answer === null){

      // }
      // else if (typeof answer === "object" && answer !== null) {
      //   console.log("answer this is an object!");
      //   console.log(JSON.stringify(answer));
      //   console.log("try to compere with");
      //   console.log(QUESTIONS[index].answers[correctIndex]);
      //   console.log(answer === QUESTIONS[index].answers[correctIndex]);

      // }

      return isCorrect;
      
      //return answer === QUESTIONS[index].answers[correctIndex];
      
    }
  );

  // console.log(correctAnswers);
  // console.log(correctAnswers);

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
          console.log(answer);

          if (answer === null) {
            cssClass += ' skipped';
          } else if (typeof answer === "object") {
            console.log(answer.label);
            console.log(answer.code);
            if()
            //cssClass += ' correct';

          } else if (answer.label) {
            console.log(answer.label);
            //cssClass += ' correct';
          } else if (Array.isArray(QUESTIONS[index].answers[correctIndex])) {
            console.log("QUESTIONS[index].answers[correctIndex]");
            if(QUESTIONS[index].answers[correctIndex]) {
              
            }
            //cssClass += ' correct';
            //here answer it is a problem
          }  else if (answer === QUESTIONS[index].answers[correctIndex]) {
            cssClass += ' correct';
          } else {
            cssClass += ' wrong';
          }

          return (
            <li key={index}>
              <h3>{index + 1}</h3>
              <p className="question">{QUESTIONS[index].text}</p>
              {QUESTIONS[index].code && 
                <pre className="jscode">{QUESTIONS[index].code}</pre>}
              <p className={cssClass}>{answer ?? 'Skipped'}</p>
            </li>
          );
        })}
      </ol>
    </div>
  );
}