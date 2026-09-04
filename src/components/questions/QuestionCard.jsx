import { useState } from 'react';

import { TOPICS } from '../../data/topics.js';

export default function QuestionCard({
    question,
}) {
    const [showAnswer, setShowAnswer] =
        useState(false);

    const topic = TOPICS.find(
        (topicItem) =>
            topicItem.id === question.topicId
    );

    return (
        <article className="question-card">
            <div className="question-card-meta">
                <span>{topic?.name}</span>
                <span>{question.type}</span>

                {question.difficulty && (
                    <span>
                        {question.difficulty}
                    </span>
                )}
            </div>

            <h3>{question.text}</h3>

            {question.code && (
                <pre className="jscode">
                    {question.code}
                </pre>
            )}

            {question.type ===
                'open' && (
                    <>
                        <button
                            className="secondary-button"
                            onClick={() =>
                                setShowAnswer(
                                    (current) => !current
                                )
                            }
                        >
                            {showAnswer
                                ? 'Hide answer'
                                : 'Show answer'}
                        </button>

                        {showAnswer && (
                            <div className="question-answer">
                                <h4>
                                    Interview answer
                                </h4>

                                <p>
                                    {question.shortAnswer}
                                </p>

                                {question.explanation && (
                                    <>
                                        <h4>
                                            Explanation
                                        </h4>

                                        <p>
                                            {
                                                question.explanation
                                            }
                                        </p>
                                    </>
                                )}
                            </div>
                        )}
                    </>
                )}

            {question.type ===
                'multiple-choice' && (
                    <p className="question-hint">
                        Available in Quiz mode
                    </p>
                )}
        </article>
    );
}