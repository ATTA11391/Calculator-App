import { useState, useEffect } from "react";
import HistoryBar from "./HistoryBar";

const Calculator = () => {
  const [firstValue, setFirstValue] = useState<string>("");
  const [secondValue, setSecondValue] = useState<string>("");
  const [operator, setOperator] = useState<string>("");
  const [results, setResults] = useState<string>("");
  const [allResults, setAllResults] = useState<string[]>([]);
  const [displayValue, setDisplayValue] = useState<string>("");
  useEffect(() => {
    setFirstValue(results);
    setSecondValue("");
    setAllResults((prev) => [...prev, results]);
  }, [results]);

  const InputValue = (Inputvalue: string) => {
    if (operator == "") {
      setFirstValue((prev) => prev + Inputvalue);
    } else {
      setSecondValue((prev) => prev + Inputvalue);
    }
  };
  const InputOperator = (InputOperator: string) => {
    setOperator(InputOperator);
  };

  const Calculate = () => {
    let FirstValue = parseFloat(firstValue);
    let SecondValue = parseFloat(secondValue);

    if (operator === "/") {
      let div: number = FirstValue / SecondValue;
      let result = String(div);
      setResults(result);
    } else if (operator === "%") {
      let mod: number = FirstValue % SecondValue;
      let result = String(mod);
      setResults(result);
    } else if (operator === "+") {
      let add: number = FirstValue + SecondValue;
      let result = String(add);
      setResults(result);
    } else if (operator === "-") {
      let sub: number = FirstValue - SecondValue;
      let result = String(sub);
      setResults(result);
    } else if (operator === "*") {
      let sub: number = FirstValue * SecondValue;
      let result = String(sub);
      setResults(result);
    } else if (operator === "+/-") {
      let plusMinus: number = -FirstValue * SecondValue;
      let result = String(plusMinus);
      setResults(result);
    }
  };
  const Reset = () => {
    setOperator("");
    setFirstValue("");
    setSecondValue("");
    setResults("");
  };

  return (
    <>
      <div className=" mx-auto p-8 gap-4 flex flex-col items-center bg-black w-[35%] mt-[17%] rounded-2xl opacity-95">
        <HistoryBar allResults={allResults} />
        <div className="">
          <div className="flex mb-4 justify-end"></div>
          <input
            className="bg-white text-black mb-4 px-4 rounded-2xl w-[560px] h-[35px]"
            type="text"
            value={results ? results : operator ? secondValue : firstValue}
          />
        </div>
        <div className="flex gap-8">
          <button
            className="w-22 h-10 bg-gray-700 rounded-3xl hover:bg-gray-700"
            onClick={() => InputValue("7")}
          >
            7
          </button>
          <button
            className="w-22 h-10 bg-gray-700 rounded-3xl hover:bg-gray-700"
            onClick={() => InputValue("8")}
          >
            8
          </button>
          <button
            className="w-22 h-10 bg-gray-700 rounded-3xl hover:bg-gray-700"
            onClick={() => InputValue("9")}
          >
            9
          </button>
          <button
            className="w-22 h-10 bg-gray-500 rounded-3xl hover:bg-gray-700"
            onClick={Reset}
          >
            Ac
          </button>
          <button
            className="w-22 h-10 bg-amber-500 rounded-3xl hover:bg-gray-700"
            onClick={() => InputOperator("/")}
          >
            /
          </button>
        </div>
        <div className="flex gap-8">
          <button
            className="w-22 h-10 bg-gray-700 rounded-3xl hover:bg-gray-700"
            onClick={() => InputValue("4")}
          >
            4
          </button>
          <button
            className="w-22 h-10 bg-gray-700 rounded-3xl hover:bg-gray-700"
            onClick={() => InputValue("5")}
          >
            5
          </button>
          <button
            className="w-22 h-10 bg-gray-700 rounded-3xl hover:bg-gray-700"
            onClick={() => InputValue("6")}
          >
            6
          </button>
          <button
            className="w-22 h-10 bg-gray-500 rounded-3xl hover:bg-gray-700"
            onClick={() => InputOperator("+/-")}
          >
            +/-
          </button>
          <button
            className="w-22 h-10 bg-amber-500 rounded-3xl hover:bg-gray-700"
            onClick={() => InputOperator("*")}
          >
            *
          </button>
        </div>
        <div className="flex gap-8">
          <button
            className="w-22 h-10 bg-gray-700 rounded-3xl hover:bg-gray-700"
            onClick={() => InputValue("1")}
          >
            1
          </button>
          <button
            className="w-22 h-10 bg-gray-700 rounded-3xl hover:bg-gray-700"
            onClick={() => InputValue("2")}
          >
            2
          </button>
          <button
            className="w-22 h-10 bg-gray-700 rounded-3xl hover:bg-gray-700"
            onClick={() => InputValue("3")}
          >
            3
          </button>
          <button
            className="w-22 h-10 bg-gray-500  rounded-3xl hover:bg-gray-700"
            onClick={() => InputOperator("%")}
          >
            %
          </button>
          <button
            className="w-22 h-10 bg-amber-500 rounded-3xl hover:bg-gray-700"
            onClick={() => InputOperator("-")}
          >
            -
          </button>
        </div>
        <div className="flex gap-8">
          <button
            className="w-22 h-10 bg-gray-700 rounded-3xl hover:bg-gray-700"
            onClick={() => InputValue("00")}
          >
            00
          </button>
          <button
            className="w-22 h-10 bg-gray-700 rounded-3xl hover:bg-gray-700"
            onClick={() => InputValue("0")}
          >
            0
          </button>
          <button
            className="w-22 h-10 bg-gray-700 rounded-3xl hover:bg-gray-700"
            onClick={() => InputValue(".")}
          >
            .
          </button>
          <button
            className="w-22 h-10 bg-amber-500 rounded-3xl hover:bg-gray-700"
            onClick={Calculate}
          >
            =
          </button>
          <button
            className="w-22 h-10 bg-amber-500 rounded-3xl hover:bg-gray-700"
            onClick={() => InputOperator("+")}
          >
            +
          </button>
        </div>
      </div>
    </>
  );
};

export default Calculator;
