import quizCompleteImg from '../../assets/quiz-complete.png';

export default function Summary({
    questions,
    userAnswers,
}) {
    const getAnswerLabel = (answer) =>
        answer?.label || answer;

    const isAnswerCorrect = (
        answer,
        question
    ) => {
        if (answer === null) {
            return false;
        }

        const correctIndices = question.correctAnswer;
        const userAnswer = getAnswerLabel(answer);

        if (Array.isArray(correctIndices)) {
            return correctIndices.some(
                (index) =>
                    getAnswerLabel(
                        question.answers[index]
                    ) === userAnswer
            );
        }

        return (
            getAnswerLabel(
                question.answers[correctIndices]
            ) === userAnswer
        );
    };

    const skippedAnswers = userAnswers.filter(
        (answer) => answer === null
    );

    const correctAnswers = userAnswers.filter(
        (answer, index) =>
            isAnswerCorrect(
                answer,
                questions[index]
            )
    );

    const skippedAnswersShare = Math.round(
        (skippedAnswers.length /
            userAnswers.length) *
        100
    );

    const correctAnswersShare = Math.round(
        (correctAnswers.length /
            userAnswers.length) *
        100
    );

    const wrongAnswersShare =
        100 -
        skippedAnswersShare -
        correctAnswersShare;

    function getCssClass(answer, question) {
        if (answer === null) {
            return 'user-answer skipped';
        }

        return `user-answer ${isAnswerCorrect(answer, question)
                ? 'correct'
                : 'wrong'
            }`;
    }

    return (
        <div id="summary">
            <img
                src={quizCompleteImg}
                alt="Trophy icon"
            />

            <h2>Quiz Completed!</h2>

            <div id="summary-stats">
                <p>
                    <span className="number">
                        {skippedAnswersShare}%
                    </span>
                    <span className="text">
                        skipped
                    </span>
                </p>

                <p>
                    <span className="number">
                        {correctAnswersShare}%
                    </span>
                    <span className="text">
                        answered correctly
                    </span>
                </p>

                <p>
                    <span className="number">
                        {wrongAnswersShare}%
                    </span>
                    <span className="text">
                        answered incorrectly
                    </span>
                </p>
            </div>

            <ol>
                {userAnswers.map(
                    (answer, index) => {
                        const question =
                            questions[index];

                        return (
                            <li key={question.id}>
                                <h3>{index + 1}</h3>

                                <p className="question">
                                    {question.text}
                                </p>

                                {question.code && (
                                    <pre className="jscode">
                                        {question.code}
                                    </pre>
                                )}

                                <p
                                    className={getCssClass(
                                        answer,
                                        question
                                    )}
                                >
                                    {answer
                                        ? getAnswerLabel(
                                            answer
                                        )
                                        : 'Skipped'}
                                </p>

                                {answer?.code && (
                                    <pre className="jscode">
                                        {answer.code}
                                    </pre>
                                )}
                            </li>
                        );
                    }
                )}
            </ol>
        </div>
    );
}