import { useState } from "react";
import Button from "./Button";
import Screen from "./Screen";
const Calculator = () => {
  const [inputValue, setInputValue] = useState<string>("");
  const [outputValue, setOutPutValue] = useState<string[]>([]);
  const buttonLabels: any[] = [
    "7",
    "8",
    "9",
    "AC",
    "/",
    "4",
    "5",
    "6",
    "+/-",
    "*",
    "1",
    "2",
    "3",
    "%",
    "-",
    "00",
    "0",
    ".",
    "=",
    "+",
  ];

  const Calculate = (label: string) => {
    if (label === "=") {
      let result = eval(inputValue);
      setInputValue(String(result));
      setOutPutValue([...outputValue, result]);
    } else if (label === "AC") {
      setInputValue("");
    } else {
      setInputValue((prev) => prev + label);
    }
  };


  const handleKeyDown = (e: any) => {
    
      if (e.key === "Enter") {
        let result = eval(inputValue);
        setInputValue(String(result));
        setOutPutValue([...outputValue, result]);
      } else if (e.key==="+" || e.key==="-" || e.key==="/" || e.key==="%" || e.key==="*") {
        setInputValue((prev) => prev + e.key);
      }else if(parseFloat(e.key) >= 0 && parseFloat(e.key) <= 9){
        setInputValue((prev) => prev + e.key);
      }else if(e.key === "Backspace"){
        setInputValue(prev => prev.slice(0,-1))
      }
      
  };
  

  return (
    <>
      <div className=" mx-auto p-8 gap-4 flex flex-col items-center bg-black w-[35%] mt-[17%] rounded-2xl opacity-95">
        <Screen output={inputValue} history={outputValue} />
        <input
          className="bg-black text-white px-4 rounded-2xl w-[560px] h-[35px]"
          type="text"
          onKeyDown={handleKeyDown}
        />
        <div className="grid grid-cols-5 gap-4">
          {buttonLabels.map((label) => (
            <button className="" onClick={() => Calculate(label)}>
              <Button label={label} />
            </button>
          ))}
        </div>
      </div>
    </>
  );
};

export default Calculator;
