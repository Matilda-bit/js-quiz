import { useSearchParams } from 'react-router-dom';

import QuestionCard from '../components/questions/QuestionCard.jsx';

import { QUESTIONS } from '../data/questions/index.js';
import { TOPICS } from '../data/topics.js';

export default function QuestionsPage() {
    const [
        searchParams,
        setSearchParams,
    ] = useSearchParams();

    const selectedTopic =
        searchParams.get('topic') || '';

    const filteredQuestions =
        selectedTopic
            ? QUESTIONS.filter(
                (question) =>
                    question.topicId ===
                    selectedTopic
            )
            : QUESTIONS;

    function handleTopicChange(event) {
        const topicId = event.target.value;

        if (topicId) {
            setSearchParams({
                topic: topicId,
            });
        } else {
            setSearchParams({});
        }
    }

    return (
        <section className="page">
            <div className="page-heading">
                <p className="eyebrow">
                    Knowledge base
                </p>

                <h2>Questions</h2>

                <p>
                    {filteredQuestions.length}{' '}
                    questions found
                </p>
            </div>

            <div className="filters">
                <label>
                    Topic
                    <select
                        value={selectedTopic}
                        onChange={
                            handleTopicChange
                        }
                    >
                        <option value="">
                            All topics
                        </option>

                        {TOPICS.map((topic) => (
                            <option
                                key={topic.id}
                                value={topic.id}
                            >
                                {topic.name}
                            </option>
                        ))}
                    </select>
                </label>
            </div>

            <div className="questions-list">
                {filteredQuestions.map(
                    (question) => (
                        <QuestionCard
                            key={question.id}
                            question={question}
                        />
                    )
                )}
            </div>
        </section>
    );
}