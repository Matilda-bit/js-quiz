import TopicCard from '../components/topics/TopicCard.jsx';

import { TOPICS } from '../data/topics.js';
import { QUESTIONS } from '../data/questions/index.js';

export default function TopicsPage() {
    return (
        <section className="page">
            <div className="page-heading">
                <p className="eyebrow">
                    Knowledge areas
                </p>

                <h2>Topics</h2>

                <p>
                    Choose a topic to review its
                    interview questions.
                </p>
            </div>

            <div className="topics-grid">
                {TOPICS.map((topic) => {
                    const questionCount =
                        QUESTIONS.filter(
                            (question) =>
                                question.topicId ===
                                topic.id
                        ).length;

                    return (
                        <TopicCard
                            key={topic.id}
                            topic={topic}
                            questionCount={
                                questionCount
                            }
                        />
                    );
                })}
            </div>
        </section>
    );
}