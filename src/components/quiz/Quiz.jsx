import { useCallback, useState } from 'react';

import Question from './Question.jsx';
import Summary from './Summary.jsx';

export default function Quiz({ questions }) {
    const [userAnswers, setUserAnswers] = useState([]);

    const activeQuestionIndex = userAnswers.length;
    const quizIsComplete = activeQuestionIndex === questions.length;

    const handleSelectAnswer = useCallback((selectedAnswer) => {
        setUserAnswers((prevUserAnswers) => [
            ...prevUserAnswers,
            selectedAnswer,
        ]);
    }, []);

    const handleSkipAnswer = useCallback(
        () => handleSelectAnswer(null),
        [handleSelectAnswer]
    );

    if (quizIsComplete) {
        return (
            <Summary
                questions={questions}
                userAnswers={userAnswers}
            />
        );
    }

    const activeQuestion = questions[activeQuestionIndex];

    return (
        <div id="quiz">
            <Question
                key={activeQuestion.id}
                question={activeQuestion}
                onSelectAnswer={handleSelectAnswer}
                onSkipAnswer={handleSkipAnswer}
            />
        </div>
    );
}