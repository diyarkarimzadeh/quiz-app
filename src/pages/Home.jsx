import React from "react";
import { useNavigate } from "react-router-dom";
import Question from "../images/questionImage.png";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="flex justify-center items-center flex-col">
        <img className="mt-4" src={Question} height="250px" width="250px" />
        <h1 className="my-4 font-medium	text-xl">Welcome to Question App</h1>
        <h3 className="text-center my-2 font-medium text-gray-600 px-5">
          You have 10 seconds to answer each question, after you answered all
          the questions successfully you get your score.
        </h3>
        <p className="text-sm font-medium text-gray-500">
          Developed by Diyar Karimzadeh
        </p>
        <button
          onClick={() => {
            navigate("/question/1");
          }}
          className="my-5 px-3 py-3 bg-sky-600 text-white rounded-lg"
        >
          Start the Quiz
        </button>
      </div>
    </div>
  );
};

export default Home;
