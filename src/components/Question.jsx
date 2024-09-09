import { useState } from 'react';

import QuestionTimer from './QuestionTimer.jsx';
import Answers from './Answers.jsx';
import QUESTIONS from '../util/questions.js';

export default function Question({
  index,
  onSelectAnswer,
  onSkipAnswer,
}) {
  const [answer, setAnswer] = useState({
    selectedAnswer: '',
    isCorrect: null
  });

  let timer = 2000;//20000 polina

  if(answer.selectedAnswer) {
    timer = 1000;
  }

  if (answer.isCorrect !== null) {
    timer = 2000;
  }

  function handleSelectAnswer(answer) {
    const correctAnswer = QUESTIONS[index].correctAnswer;

    let isCorrect;
    let correctAns;
    let ans;

    // Check if correctAnswer is an array
    if (Array.isArray(correctAnswer)) {
        // console.log(correctAnswer);
        // console.log(answer);

        // Check if the selected answer is in the array of correct answers
        isCorrect = correctAnswer.some(ca => {
            correctAns = QUESTIONS[index].answers[ca].label ? QUESTIONS[index].answers[ca].label : QUESTIONS[index].answers[ca];
            ans = answer.label ? answer.label : answer;
            return ans === correctAns;
        });
    } else {
        correctAns = QUESTIONS[index].answers[correctAnswer].label ? QUESTIONS[index].answers[correctAnswer].label : QUESTIONS[index].answers[correctAnswer];
        ans = answer.label ? answer.label : answer;
        isCorrect = correctAns === ans;
    }

    setAnswer({
        selectedAnswer: answer,
        isCorrect: isCorrect
    });

    setTimeout(() => {
        setAnswer({
            selectedAnswer: answer,
            isCorrect: isCorrect // Use the isCorrect value calculated earlier
        });

        setTimeout(() => {
            onSelectAnswer(answer);
        }, 2000);
    }, 1000);
}


  let answerState = '';

  if (answer.selectedAnswer && answer.isCorrect !== null) {
    answerState = answer.isCorrect ? 'correct' : 'wrong';
  } else if (answer.selectedAnswer) {
    answerState = 'answered';
  }

  return (
    <div id="question">
      <QuestionTimer 
        key={timer}
        timeout={timer} 
        onTimeout={answer.selectedAnswer === '' ? onSkipAnswer : null} 
        mode={answerState}
        />
      <h2>{QUESTIONS[index].text}</h2>
      {QUESTIONS[index].code && 
        <pre className="jscode">{QUESTIONS[index].code}</pre>}
      <Answers
        answers={QUESTIONS[index].answers}
        selectedAnswer={answer.selectedAnswer}
        answerState={answerState}
        onSelect={handleSelectAnswer}
      />
    </div>
  );
}