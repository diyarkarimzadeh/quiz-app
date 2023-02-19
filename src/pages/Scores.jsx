import React from "react";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Result from "../images/result.png";
import { useNavigate } from "react-router-dom";

const Scores = () => {
  const navigate = useNavigate();
  const [finalScore, setFinalScore] = useState(0);
  const scores = new Array(
    useSelector((state) => state.question.question1),
    useSelector((state) => state.question.question2),
    useSelector((state) => state.question.question3),
    useSelector((state) => state.question.question4),
    useSelector((state) => state.question.question5)
  );

  useEffect(() => {
    scores.map((score) => {
      if (score) {
        setFinalScore((prevScore) => prevScore + 1);
      }
    });
  }, []);

  return (
    <div className="flex items-center justify-center flex-col">
      <img src={Result} width="250px" height="250px" />
      <div className="border-2 rounded-xl px-3 py-3 mt-2">
        <h1>Your final score is {finalScore} out of 5</h1>
      </div>

      <div className="flex flex-col mt-4 md:flex-row md:space-x-3 md:mx-4">
        {scores.map((score, index) => (
          <div className="border-2 rounded-xl px-3 py-3 mt-3">
            Question {index + 1} : {score ? "Correct" : "False"}
          </div>
        ))}
      </div>

      <div>
        <button
          onClick={() => {
            navigate("/");
          }}
          className="my-5 px-3 py-3 bg-sky-600 text-white rounded-lg"
        >
          Start again!
        </button>
      </div>
    </div>
  );
};

export default Scores;
