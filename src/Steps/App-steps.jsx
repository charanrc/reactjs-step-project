// import Component from "./Component";

import { useState } from "react";

const messages = ["Learn React", "Apply for jobs", "Invest your new income"];

export default function App() {
  const [step, setStep] = useState(2);
  const [isOpen, setIsOpen] = useState(true);
  // const arr = ["hi", "hello", "hey", "hej"];
  // const arrObj = [
  //   {
  //     greet: "Hi",
  //     name: "rsa",
  //     loaction: "bangalore",
  //     employee: 3000,
  //   },
  //   {
  //     greet: "Hello",
  //     name: "dell",
  //     loaction: "bangalore",
  //     employee: 1000,
  //   },
  //   {
  //     greet: "Hey",
  //     name: "hpe",
  //     loaction: "bangalore",
  //     employee: 4000,
  //   },
  //   {
  //     greet: "Hej",
  //     name: "bel",
  //     loaction: "bangalore",
  //     employee: 8000,
  //   },
  // ];
  // const out = Math.floor(Math.random() * arr.length);

  function previousHandler() {
    if (step > 1) {
      setStep(() => step - 1);
    }
  }

  function nextHandler() {
    console.log("next");
    if (step < 3) setStep(step + 1);
  }
  return (
    <>
      {/* {arrObj.map((data) => {
        return <Component arrObj={data} key={data.greet}></Component>;
      })} */}
      <button
        className="close"
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        {" "}
        &times;
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}>3</div>
          </div>
          <p className="message">
            Step {step}: {messages[step - 1]}
          </p>
          <div className="buttons">
            <button
              style={{ backgroundColor: "green", color: "#fff" }}
              onClick={previousHandler}
            >
              Previous
            </button>
            <button
              style={{ backgroundColor: "green", color: "#fff" }}
              onClick={nextHandler}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </>
  );
}
