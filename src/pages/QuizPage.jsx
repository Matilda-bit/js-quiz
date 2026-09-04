import Quiz from '../components/quiz/Quiz.jsx';

import {
    MULTIPLE_CHOICE_QUESTIONS,
} from '../data/questions/index.js';

export default function QuizPage() {
    return (
        <section className="page">
            <div className="page-heading">
                <p className="eyebrow">
                    Practice mode
                </p>

                <h2>Quiz</h2>

                <p>
                    {MULTIPLE_CHOICE_QUESTIONS.length}{' '}
                    multiple-choice questions
                </p>
            </div>

            <Quiz
                questions={
                    MULTIPLE_CHOICE_QUESTIONS
                }
            />
        </section>
    );
}