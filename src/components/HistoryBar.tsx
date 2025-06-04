import * as React from "react";

interface HistoryBarProps {
  allResults: string[];
  firstValue: string;
  secondValue: string;
  operator: string;
}

const HistoryBar: React.FC<HistoryBarProps> = (props) => {
  const { firstValue } = props;
  const { secondValue } = props;
  const { operator } = props;

  return (
    <>
      <div className="flex flex-col ml-[80%] items-end mt-10 w-[25%] text-white">
        <p className="">
          {firstValue} {operator} {secondValue}
        </p>
      </div>
    </>
  );
};
export default HistoryBar;
