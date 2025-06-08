import { useState } from "react";
import Button from "./Button";
import Screen from "./Screen";
import { BUTTON_LABELS } from "../constants/ButtonCosntants";
const Calculator = () => {
  const [inputValue, setInputValue] = useState<string>("");
  const [outputValue, setOutPutValue] = useState<string[]>([]);

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
    } else if (
      e.key === "+" ||
      e.key === "-" ||
      e.key === "/" ||
      e.key === "%" ||
      e.key === "*"
    ) {
      setInputValue((prev) => prev + e.key);
    } else if (parseFloat(e.key) >= 0 && parseFloat(e.key) <= 9) {
      setInputValue((prev) => prev + e.key);
    } else if (e.key === "Backspace") {
      setInputValue((prev) => prev.slice(0, -1));
    }
  };

  return (
    <>
    <div className="text-center text-3xl p-4 bg-amber-500">
        My Calculator App
    </div>
      <div
        tabIndex={0}
        onKeyDown={handleKeyDown}
        className="mx-auto p-8 gap-4 flex flex-col items-center bg-black w-[35%] mt-[17%] rounded-2xl opacity-95"
      >
        <Screen output={inputValue} history={outputValue} />
        <div className="grid grid-cols-5 gap-4">
          {BUTTON_LABELS.Buttons.map((button) => (
            <div
              className={`w-22 h-10 justify-around rounded-3xl ${button.color}`}
            >
              <Button
                label={button.label}
                value={button.value}
                onclick={Calculate}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Calculator;
