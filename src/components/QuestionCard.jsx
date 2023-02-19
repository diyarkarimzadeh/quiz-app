import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { data } from "../data/data";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  setQuestion1,
  setQuestion2,
  setQuestion3,
  setQuestion4,
  setQuestion5,
} from "../redux/questionSlice";

const QuestionCard = ({ index }) => {
  const [selectedId, setSelectedId] = useState();
  const [answered, setAnswered] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [counter, setCounter] = useState(9);
  const [stoper, setStoper] = useState(false);
  const navigate = useNavigate();
  const distpach = useDispatch();

  const handleClick = (id) => {
    setSelectedId(id);
    setAnswered(true);
    setStoper(true);
  };

  useEffect(() => {
    if (!stoper) {
      if (counter > 0) {
        setTimeout(() => {
          setCounter(counter - 1);
        }, 1000);
      }
    }
  }, [counter]);

  useEffect(() => {
    setTimeout(() => {
      setAnswered(true);
    }, 9000);
  }, []);

  useEffect(() => {
    if (answered) {
      if (selectedId === data[index].correctAnswerId) {
        setIsCorrect(true);

        switch (index) {
          case 0:
            distpach(setQuestion1({ value: true }));
            break;
          case 1:
            distpach(setQuestion2({ value: true }));
            break;
          case 2:
            distpach(setQuestion3({ value: true }));
            break;
          case 3:
            distpach(setQuestion4({ value: true }));
            break;
          case 4:
            distpach(setQuestion5({ value: true }));
            break;
        }
      } else {
        setIsCorrect(false);
        switch (index) {
          case 0:
            distpach(setQuestion1({ value: false }));
            break;
          case 1:
            distpach(setQuestion2({ value: false }));
            break;
          case 2:
            distpach(setQuestion3({ value: false }));
            break;
          case 3:
            distpach(setQuestion4({ value: false }));
            break;
          case 4:
            distpach(setQuestion5({ value: false }));
            break;
        }
      }
    }
  }, [answered]);

  return (
    <div className="flex items-center justify-center">
      <div className="flex items-start justify-center flex-col border-2  rounded-xl mt-4 px-4 py-4 ">
        <div className="flex items-center justify-between w-full">
          <h1 className="text-xl font-medium">{data[index].question}</h1>
          <div>{counter !== "stop" ? <p>00:0{counter}</p> : <></>}</div>
        </div>

        <div>
          {answered
            ? data[index].answers.map((answer) =>
                isCorrect ? (
                  <>
                    {answer.id === data[index].correctAnswerId ? (
                      <div className="bg-green-100 px-3 py-3 rounded-lg w-[300px] mt-4 border-2 border-green-300">
                        {answer.answer}
                      </div>
                    ) : (
                      <div className="bg-sky-100 px-3 py-3 rounded-lg w-[300px] mt-4 border-2 border-blue-300">
                        {answer.answer}
                      </div>
                    )}
                  </>
                ) : (
                  <>
                    {answer.id === data[index].correctAnswerId ? (
                      <div className="bg-green-100 px-3 py-3 rounded-lg w-[300px] mt-4 border-2 border-green-300">
                        {answer.answer}
                      </div>
                    ) : answer.id === selectedId ? (
                      <div className="bg-red-100 px-3 py-3 rounded-lg w-[300px] mt-4 border-2 border-red-300">
                        {answer.answer}
                      </div>
                    ) : (
                      <div className="bg-sky-100 px-3 py-3 rounded-lg w-[300px] mt-4 border-2 border-blue-300">
                        {answer.answer}
                      </div>
                    )}
                  </>
                )
              )
            : data[index].answers.map((answer) => (
                <div
                  onClick={() => {
                    handleClick(answer.id);
                  }}
                  key={answer.id}
                  className="bg-sky-100 px-3 py-3 rounded-lg w-[300px] mt-4 border-2 border-blue-300"
                >
                  <p>{answer.answer}</p>
                </div>
              ))}
        </div>

        <div className="flex flex-row mt-6 items-center justify-between w-full">
          <p className="font-medium">Question {index + 1}/5</p>
          {answered ? (
            <button
              onClick={() => {
                if (index + 1 === data.length) {
                  navigate("/scores");
                } else {
                  navigate(`/question/${index + 2}`);
                }
              }}
              className="px-3 py-3 bg-sky-600 text-white rounded-lg"
            >
              {index + 1 === data.length ? "See Scores" : "Next Que"}
            </button>
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
};

export default QuestionCard;
