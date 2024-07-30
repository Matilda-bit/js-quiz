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

  function handleSelectAnswer(answer) {
    const correctAns = QUESTIONS[index].answers[QUESTIONS[index].correctAnswer].label ? QUESTIONS[index].answers[QUESTIONS[index].correctAnswer].label : QUESTIONS[index].answers[QUESTIONS[index].correctAnswer];
    const ans = answer.label ? answer.label : answer;
    setAnswer({
      selectedAnswer: answer,
      isCorrect: null
    })

    setTimeout(() => {
      setAnswer({
        selectedAnswer: answer,
        isCorrect: correctAns === ans
      })

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
        timeout={20000} 
        onTimeout={onSkipAnswer} 
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