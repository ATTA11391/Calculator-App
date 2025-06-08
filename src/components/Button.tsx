import React from "react";

interface ButtonProps {
  label: string;
  value: string;
  onclick: (label: string) => any;
}
const Button: React.FC<ButtonProps> = (props) => {
  const { label } = props;
  const { value } = props;
  const { onclick } = props;

  return (
    <>
      <div>
        <button
          onClick={() => onclick(value)}
          className="w-22 h-10 justify-around rounded-3xl "
        >
          {label}
        </button>
      </div>
    </>
  );
};
export default Button;
