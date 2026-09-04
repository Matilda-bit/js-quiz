import {
  Navigate,
  Route,
  Routes,
} from 'react-router-dom';

import Header from './components/layout/Header.jsx';

import HomePage from './pages/HomePage.jsx';
import TopicsPage from './pages/TopicsPage.jsx';
import QuestionsPage from './pages/QuestionsPage.jsx';
import QuizPage from './pages/QuizPage.jsx';

function App() {
  return (
    <>
      <Header />

      <main>
        <Routes>
          <Route
            path="/"
            element={<HomePage />}
          />

          <Route
            path="/topics"
            element={<TopicsPage />}
          />

          <Route
            path="/questions"
            element={
              <QuestionsPage />
            }
          />

          <Route
            path="/quiz"
            element={<QuizPage />}
          />

          <Route
            path="*"
            element={
              <Navigate
                to="/"
                replace
              />
            }
          />
        </Routes>
      </main>
    </>
  );
}

export default App;