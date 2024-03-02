import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

//importing the components and the questions

import Question from "./Components/Question";
import Score from "./Components/Score";
import LandingPage from "./Components/LandingPage";
import questionsData from "./questions.json";

function App() {
  //using setState to assign a state or change the state of the constant when required

  const [questions, setQuestions] = useState([]);
  const [score, setScore] = useState(0);

  //using useEffect to fect the question one by one from the json file

  useEffect(() => {
    setQuestions(questionsData);
  }, []);

  //setting the score zero on reststarting the quiz

  const restartQuiz = () => {
    setScore(0);
  };

  //setting up the routes for different components

  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/McqGame" exact element={<LandingPage />} />

          {/* passing props in the component */}
          <Route
            path="/quiz"
            exact
            element={
              <Question
                questions={questions}
                score={score}
                setScore={setScore}
              />
            }
          />

          <Route
            path="/score"
            element={
              <Score
                score={score}
                totalQuestions={questions.length}
                restartQuiz={restartQuiz}
              />
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
