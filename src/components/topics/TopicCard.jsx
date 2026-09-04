import { Link } from 'react-router-dom';

export default function TopicCard({
    topic,
    questionCount,
}) {
    return (
        <Link
            to={`/questions?topic=${topic.id}`}
            className="topic-card"
        >
            <h3>{topic.name}</h3>

            <p>{topic.description}</p>

            <span>
                {questionCount}{' '}
                {questionCount === 1
                    ? 'question'
                    : 'questions'}
            </span>
        </Link>
    );
}