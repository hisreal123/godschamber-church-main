import React, { useState } from "react";

type HamBugerProps = {
  handleClick: () => {};
  toggle: true;
};
const HamBuger: React.FC<HamBugerProps> = ({ handleClick, toggle }) => {
  const [swap, setSwap] = useState(true);

  return (
    <div className="group" onClick={handleClick}>
      <div className=" bg-slate-100 h-[.1rem] w-6 mb-[.4rem] group-hover:mt-[.3rem] group-hover:rotate-[45deg] group-hover:m-0 "></div>
      <div className=" bg-slate-100 h-[.1rem] w-6  group-hover:mb-[.3rem ] group-hover:bg-red-400 group-hover:-rotate-[45deg]"></div>
      <div className=" bg-slate-100 h-[.1rem] w-6  mt-[.4rem] group-hover:hidden"></div>
    </div>
  );
};

export default HamBuger;
