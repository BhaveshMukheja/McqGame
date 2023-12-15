import React from "react";
import { Link } from "react-router-dom";

function Score({ score, totalQuestions, restartQuiz }) {
  
  //returning the component front-end

  return (
    <>
      <div className="container mx-auto h-screen flex flex-col items-center justify-center bg-black">
        <div className="container mx-auto text-center my-5 h-40 w-3/5 flex flex-col items-center justify-center bg-gradient-to-r from-green-400 to-blue-500  rounded-full">
          <h2 className="text-6xl font-bold  text-white uppercase">
            Your Score
          </h2>
        </div>
        <h1 className="text-3xl text-sky-100 my-10">
          You scored{" "}
          <span className="text-green-500 text-bold text-4xl">{score}</span> out
          of{" "}
          <span className="text-blue-400 text-bold text-4xl">
            {totalQuestions}
          </span>
        </h1>
        <div className="conatiner options flex flex-wrap w-1/2 justify-evenly items-center text-sky-100">
          <Link to="/quiz">
            <button
              onClick={restartQuiz} //on clicking it sets the scroe to 0 again and retirect to the landing page
              type="button"
              className=" text-base font-bold mt-20 py-3 w-64 text-green-700  hover:text-white border border-green-700 hover:bg-green-500 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-500 dark:focus:ring-green-800 transition ease-in-out  hover:-translate-y-0.5 hover:scale-110  duration-300"
            >
              Restart Quiz
            </button>
          </Link>
          <Link to="/">
            <button
              onClick={restartQuiz} //on clicking it sets the scroe to 0 again and retirect to the first question
              type="button"
              className=" text-base font-bold mt-20 py-3 w-64 text-sky-700  hover:text-white border border-sky-700 hover:bg-sky-500 focus:ring-4 focus:outline-none focus:ring-sky-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-sky-500 dark:text-sky-300 dark:hover:text-white-700 dark:hover:bg-sky-500 dark:focus:ring-sky-800 transition ease-in-out  hover:-translate-y-0.5 hover:scale-110  duration-300 "
            >
              Return to Landing Page
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Score;
