import React, { useEffect, useLayoutEffect, useState } from "react";
import "../App.css";
import Result from "./result";
import { useNavigate } from "react-router-dom";

const Question = (props) => {
  const [quedata, setQuedata] = useState(props.show);
  const [currentscore, setCurrentscore] = useState(0);

  const [currentque, setCurrentque] = useState(0);

  let navigate = useNavigate();

  useEffect(() => {}, []);

  const getdata = (val) => {
    let quelength = quedata.results.length;

    const ranswer = quedata.results[currentque].correct_answer;

    if (currentque + 1 < quelength) {
      if (val == ranswer) {
        return (
          setCurrentscore(currentscore + 1),
          setCurrentque(currentque + 1),
          console.log(val)
        );
      } else {
        return setCurrentque(currentque + 1), console.log("hii");
      }
    } else {
      if (val == ranswer) {
        let alld = { length: quelength, score: currentscore + 1 };

        navigate("/result", { state: alld });
      } else {
        let alld = { length: quelength, score: currentscore };

        navigate("/result", { state: alld });
      }

      // props.showdata(false,currentscore,quelength)
    }
  };

  return quedata != "" ? (
    <div className="que-main">
      <>
        <h2>Current Score is : {currentscore}</h2>
        {
          <div className="que  w-50 rounded   text-dark">
            <h2>
              Question {currentque + 1} out of {quedata.results.length}
            </h2>
            <p className="fs-4  fw-semibold m-2 mt-4">
              {quedata.results[currentque].question}
            </p>
            <div className="list-main">
              {quedata.results[currentque].incorrect_answers.map(
                (item, index) => (
                  <li
                    onClick={(item) => getdata(item)}
                    className="fs-5 fw-bold list-unstyled  mt-2 rounded"
                    key={index}
                  >
                    {item}
                  </li>
                )
              )}
              <li
                onClick={() =>
                  getdata(quedata.results[currentque].correct_answer)
                }
                className="fs-5 fw-bold list-unstyled  mt-2 rounded"
              >
                {quedata.results[currentque].correct_answer}
              </li>
            </div>
          </div>
        }
      </>
    </div>
  ) : null;
};

export default Question;
