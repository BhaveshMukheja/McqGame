import React from "react";
import { Link } from "react-router-dom";

import "../index.css";

function LandingPage() {
  return (
    <>
      <div className="container mx-auto h-screen flex flex-col items-center justify-center bg-black">
        <div className="container mx-auto text-center my-5 h-40 w-3/5 flex flex-col items-center justify-center bg-gradient-to-r from-green-400 to-blue-500  rounded-full">
          <h2 className="text-3xl font-bold  text-white uppercase">
            Start the quiz by clicking the button below
          </h2>
        </div>

        <Link to="/quiz">
          <button
            type="button"
            className=" text-base font-bold py-3 w-64 text-green-700  hover:text-white border border-green-700 hover:bg-green-500 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-500 dark:focus:ring-green-800 transition ease-in-out  hover:-translate-y-0.5 hover:scale-110  duration-300 "
          >
            {" "}
            Start Quiz
          </button>
        </Link>
      </div>
    </>
  );
}

export default LandingPage;
