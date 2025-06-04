import React from "react";

interface ButtonProps {
  label: string;
}
const Button: React.FC<ButtonProps> = (props) => {
  const { label } = props;
  let bgColor = "";
  if (["+", "-", "*", "/", "=", "%", "AC", "+/-"].includes(label)) {
    bgColor = "bg-amber-500";
  } else {
    bgColor = "bg-gray-700";
  }
  return (
    <>
      <div className="">
        <button
          className={`w-22 h-10 justify-around bg-amber-500 rounded-3xl ${bgColor}`}
        >
          {label}
        </button>
      </div>
    </>
  );
};
export default Button;
