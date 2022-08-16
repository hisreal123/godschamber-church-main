import Image from "next/image";
import React from "react";

import logo from "./PageLogo.png";
const Logo: React.FC = () => {
  return (
    <div>
      <a href="http://www.facebok.com" className="">
        <Image
          src={logo}
          alt=" Page logo"
          height="35"
          width="38"
          // layout=" fixed "
          objectFit="contain"
        />
      </a>
    </div>
  );
};

export default Logo;
