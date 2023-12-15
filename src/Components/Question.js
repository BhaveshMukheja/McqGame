import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; ///importing useNavigate to navigate or redirect to a new page or assigned page when needed
import "../index.css"; //importing tailwindcss

function Question({ questions, score, setScore }) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const navigate = useNavigate();

  //fucntion to handle the program when an option is chosen

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1); // if the selected option is correct it increases the score by 1
    }
    nextQuestion(); // if the selected option is incorrect it moves to the next question
  };

  // function to move to the next question

  const nextQuestion = () => {
    const nextQuestionIndex = currentQuestionIndex + 1; // incrementing the currentQuestionIndex

    //appying and checking the condition if the quiz is over or not

    if (nextQuestionIndex < questions.length) {
      setCurrentQuestionIndex(nextQuestionIndex); // if the question remains it set the currentQuestionIndex to the next one
    } else {
      navigate("/score"); //if no other question remains it navigate ot redirect to the score page
    }
  };

  const currentQuestion = questions[currentQuestionIndex];

  // returning the front end of the quiz

  return (
    <>
      {/* a heading to show how many questions have the user attempted out of the all */}

      <h1 className="text-sky-100 fixed top-0 right-0 px-5 py-3 text-lg">
        {currentQuestionIndex + 1}/{questions.length}
      </h1>

      {/* a container to show the question */}

      <div className="container mx-auto h-screen flex flex-col items-center justify-center bg-black">
        <div className="container mx-auto text-center my-5 h-40 w-3/5 flex flex-col items-center justify-center bg-gradient-to-r from-green-400 to-blue-500  rounded-full">
          <h2 className="text-3xl font-bold  text-white uppercase">
            {currentQuestion.question}
          </h2>
        </div>

        {/* ac container to show the options */}

        <div className="conatiner options flex flex-wrap w-1/2 justify-evenly items-center">
          {/* mapping the questions */}

          {currentQuestion.options.map((option, index) => (
            <button
              type="button"
              className=" text-base font-bold my-5 py-3 w-64 text-sky-700  hover:text-white border border-sky-700 hover:bg-sky-500 focus:ring-4 focus:outline-none focus:ring-sky-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-sky-500 dark:text-sky-300 dark:hover:text-white-700 dark:hover:bg-sky-500 dark:focus:ring-sky-800 transition ease-in-out  hover:-translate-y-0.5 hover:scale-110  duration-300 "
              key={index}
              onClick={() =>
                handleAnswerOptionClick(
                  option === currentQuestion.correctAnswer //checking if the answer is correct or not
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
}

export default Question;
