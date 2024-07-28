import { useState, useCallback } from 'react';

import QUESTIONS from '../util/questions.js';
import quizCompleteImg from '../assets/quiz-complete.png';
import QuestionTimer from './QuestionTimer.jsx';

export default function Quiz() {
    const [userAnswers, setUserAnswers] = useState([]);

    const activeQuestionIndex = userAnswers.length;
    const quizIsComplete = activeQuestionIndex === QUESTIONS.length;
  
    const handleSelectAnswer = useCallback(function handleSelectAnswer(selectedAnswer) {
        setUserAnswers((prevUserAnswers) => {
          return [...prevUserAnswers, selectedAnswer];
        });
      }, []);

    const handleSkipAnswer = useCallback(() => handleSelectAnswer(null), [handleSelectAnswer]);
  
    if (quizIsComplete) {
      return (
        <div id="summary">
          <img src={quizCompleteImg} alt="Trophy icon" />
          <h2>Quiz Completed!</h2>
        </div>
      );
    }
  
    const shuffledAnswers = [...QUESTIONS[activeQuestionIndex].answers];
    shuffledAnswers.sort(() => Math.random() - 0.5);

  return (
    <div id="quiz">
      <div id="question">
        <QuestionTimer
          key={activeQuestionIndex}
          timeout={20000}
          onTimeout={handleSkipAnswer}
        />
        <h2>{QUESTIONS[activeQuestionIndex].text}</h2>

        {QUESTIONS[activeQuestionIndex].code && 
        <pre className="jscode">{QUESTIONS[activeQuestionIndex].code}</pre>}

        <ul id="answers">
          {shuffledAnswers.map((answer) => (
            <>
            {answer.label && answer.code ? 
                (<li key={answer} className="answer">
                <button onClick={() => handleSelectAnswer(answer)}>
                  <span>{answer.label}</span>
                  <pre className="jscode">{answer.code}</pre>
                </button>
              </li>)
                :
                (<li key={answer} className="answer">
                <button onClick={() => handleSelectAnswer(answer)}>
                  {answer}
                </button>
              </li>)
            }
            </>
          ))}

        </ul>
      </div>
    </div>
  );
}