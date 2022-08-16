import React, { useState } from "react";

type HamBugerProps = {
  handleClick: () => {};
  toggle: string;
};
const HamBuger: React.FC<HamBugerProps> = ({ handleClick, toggle }) => {
  const [swap, setSwap] = useState(true);

  return { toggle?(): ""; };
};

export default HamBuger;
