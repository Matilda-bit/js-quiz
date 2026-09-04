import { useState } from 'react';

import QuestionTimer from './QuestionTimer.jsx';
import Answers from './Answers.jsx';

export default function Question({
    question,
    onSelectAnswer,
    onSkipAnswer,
}) {
    const [answer, setAnswer] = useState({
        selectedAnswer: '',
        isCorrect: null,
    });

    let timer = 20000;

    if (answer.selectedAnswer) {
        timer = 1000;
    }

    if (answer.isCorrect !== null) {
        timer = 2000;
    }

    function getAnswerValue(answerValue) {
        return answerValue?.label || answerValue;
    }

    function handleSelectAnswer(selectedAnswer) {
        const correctAnswer = question.correctAnswer;

        const selectedValue = getAnswerValue(selectedAnswer);

        const isCorrect = Array.isArray(correctAnswer)
            ? correctAnswer.some(
                (correctAnswerIndex) =>
                    getAnswerValue(
                        question.answers[correctAnswerIndex]
                    ) === selectedValue
            )
            : getAnswerValue(
                question.answers[correctAnswer]
            ) === selectedValue;

        setAnswer({
            selectedAnswer,
            isCorrect,
        });

        setTimeout(() => {
            onSelectAnswer(selectedAnswer);
        }, 2000);
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
                onTimeout={
                    answer.selectedAnswer === ''
                        ? onSkipAnswer
                        : null
                }
                mode={answerState}
            />

            <h2>{question.text}</h2>

            {question.code && (
                <pre className="jscode">
                    {question.code}
                </pre>
            )}

            <Answers
                answers={question.answers}
                selectedAnswer={answer.selectedAnswer}
                answerState={answerState}
                onSelect={handleSelectAnswer}
            />
        </div>
    );
}