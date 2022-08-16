import React, { useState, useEffect } from "react";
import logo from "/public/assets/PageLogo.png";
import Nav from "./Navs";
import Image from "next/image";
import {BiMenu} from "react-icons/bi";

const Header = () => {
  const [toggle, setToggle] = useState(true);

  // function to handle toggle and set toggle to opposite of it
  const handleToggle = () => {
    setToggle(!toggle);
  };

  useEffect(() => {
    console.log(" Consoled !!!");
  }, []);

  //  variable style for CustomStyle from ListItems Component
  const LinkStyle =
    " w-full block py-3 px-0 hover:text-white hover:bg-[#0C4E12] pl-2 text-sm md:px-5 md:m-0 md:bg-[transparent]";

  return (
    <div className=" fixed top-0 w-full bg-[#FBFBFB] md:flex justify-between md:items-center ">
      <div className="mobile bg-[#222222] md:bg-[#fbfbfb] relative flex items-center  px-3 justify-between w-full md:px-8   ">
        <a href="http://www.facebok.com" className="">
          <Image
            src={logo}
            alt=" Page logo"
            height="35"
            width="35"
            layout="  "
          />
        </a>

        <div className=" md:hidden" onClick={handleToggle}>
          <BiMenu size="2rem" color="white" />
        </div>

        <div className="hidden md:flex md:items-center transition-all">
          <Nav url="www.fb.com " item="HOME" CustomStyle={LinkStyle} />
          <Nav url="www.fb.com " item="ABOUT US" CustomStyle={LinkStyle} />
          <Nav url="www.fb.com " item="GIVE" CustomStyle={LinkStyle} />
          <Nav url="www.fb.com " item="GC JUNIOR" CustomStyle={LinkStyle} />
          <Nav url="www.fb.com " item="GC DIAMOND" CustomStyle={LinkStyle} />
          <Nav
            url="www.fb.com "
            item="CONNECT WITH US "
            CustomStyle={LinkStyle}
          />
        </div>
      </div>

      {/* nav List */}
      {!toggle && (
        <div className="transition-all">
          <Nav url="www.fb.com " item="HOME" CustomStyle={LinkStyle} />
          <Nav url="www.fb.com " item="ABOUT US" CustomStyle={LinkStyle} />
          <Nav url="www.fb.com " item="GIVE" CustomStyle={LinkStyle} />
          <Nav url="www.fb.com " item="GC JUNIOR" CustomStyle={LinkStyle} />
          <Nav url="www.fb.com " item="GC DIAMOND" CustomStyle={LinkStyle} />
        </div>
      )}
    </div>
  );
};

export default Header;
