import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../index.css";

function Question({ questions, score, setScore }) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const navigate = useNavigate();

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }
    nextQuestion();
  };

  const nextQuestion = () => {
    const nextQuestionIndex = currentQuestionIndex + 1;
    if (nextQuestionIndex < questions.length) {
      setCurrentQuestionIndex(nextQuestionIndex);
    } else {
      navigate("/score"); // Navigate to the score component
    }
  };

  if (currentQuestionIndex < questions.length) {
    const currentQuestion = questions[currentQuestionIndex];

    return (
      <>
        <h1 className="text-sky-100 fixed top-0 right-0 px-5 py-3 text-lg">
          {currentQuestionIndex + 1}/{questions.length}
        </h1>
        <div className="container mx-auto h-screen flex flex-col items-center justify-center bg-black">
          <div className="container mx-auto text-center my-5 h-40 w-3/5 flex flex-col items-center justify-center bg-gradient-to-r from-green-400 to-blue-500  rounded-full">
            <h2 className="text-3xl font-bold  text-white uppercase">
              {currentQuestion.question}
            </h2>
          </div>

          <div className="conatiner options flex flex-wrap w-1/2 justify-evenly items-center">
            {currentQuestion.options.map((option, index) => (
              <button
                type="button"
                className=" text-base font-bold my-5 py-3 w-64 text-sky-700  hover:text-white border border-sky-700 hover:bg-sky-500 focus:ring-4 focus:outline-none focus:ring-sky-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-sky-500 dark:text-sky-300 dark:hover:text-white-700 dark:hover:bg-sky-500 dark:focus:ring-sky-800 transition ease-in-out  hover:-translate-y-0.5 hover:scale-110  duration-300 "
                key={index}
                onClick={() =>
                  handleAnswerOptionClick(
                    option === currentQuestion.correctAnswer
                  )
                }
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      </>
    );
  } else {
    return null; // Add a loading or placeholder component if needed
  }
}

export default Question;
