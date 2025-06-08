import React from "react";
interface ScreenProps {
  output: string;
  history: string[];
}

const Screen: React.FC<ScreenProps> = (props) => {
  const { output } = props;
  const { history } = props;
  return (
    <>
      <div className="bg-white h-[10vh]">
        <div className="text-black flex text-right w-[95%]">
          {history.map((ele) => (
            <p>{ele}, </p>
          ))}
        </div>
        <div className="text-black flex justify-end items-end text-right w-[500px] text-2xl">
          {output}
        </div>
      </div>
    </>
  );
};
export default Screen;
