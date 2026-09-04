import { Link } from 'react-router-dom';

import { QUESTIONS } from '../data/questions/index.js';
import { TOPICS } from '../data/topics.js';
import { INTERVIEWS } from '../data/interviews.js';

export default function HomePage() {
    return (
        <section className="page">
            <div className="hero">
                <p className="eyebrow">
                    Personal knowledge base
                </p>

                <h2>
                    Prepare for interviews using
                    questions you were actually asked.
                </h2>

                <p>
                    Collect real interview questions,
                    organize them by topic and practice
                    them whenever you need a refresher.
                </p>

                <div className="hero-actions">
                    <Link
                        className="primary-button"
                        to="/quiz"
                    >
                        Start Quiz
                    </Link>

                    <Link
                        className="secondary-button"
                        to="/questions"
                    >
                        Browse Questions
                    </Link>
                </div>
            </div>

            <div className="stats-grid">
                <div className="stat-card">
                    <strong>
                        {QUESTIONS.length}
                    </strong>
                    <span>Questions</span>
                </div>

                <div className="stat-card">
                    <strong>
                        {TOPICS.length}
                    </strong>
                    <span>Topics</span>
                </div>

                <div className="stat-card">
                    <strong>
                        {INTERVIEWS.length}
                    </strong>
                    <span>Interviews</span>
                </div>
            </div>
        </section>
    );
}