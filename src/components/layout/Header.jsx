import { NavLink } from 'react-router-dom';

import logoImg from '../../assets/quiz-logo.png';

export default function Header() {
    return (
        <header className="app-header">
            <div className="brand">
                <img src={logoImg} alt="Interview Prep logo" />
                <h1>Interview Prep</h1>
            </div>

            <nav className="main-navigation">
                <NavLink to="/">
                    Home
                </NavLink>

                <NavLink to="/topics">
                    Topics
                </NavLink>

                <NavLink to="/questions">
                    Questions
                </NavLink>

                <NavLink to="/quiz">
                    Quiz
                </NavLink>
            </nav>
        </header>
    );
}