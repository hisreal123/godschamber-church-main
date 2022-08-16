import React from "react";

const HamBuger: React.FC = () => {
  return (
    <div className="group">
      <div className=" bg-slate-100 h-[.1rem] w-6 mb-[.4rem] group-hover:rotate "></div>
      <div className=" bg-slate-100 h-[.1rem] w-6  group-hover:bg-red-400 "></div>
      <div className=" bg-slate-100 h-[.1rem] w-6  mt-[.4rem]"></div>
    </div>
  );
};

export default HamBuger;
