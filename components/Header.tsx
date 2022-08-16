import React, { useState, useEffect } from "react";
import Nav from "./Navs";
import HamBuger from "./HamBuger";
import Logo from "./Header/Logo";

// interface HeaderProps {
//   (n: number) :  void;
// }
const Header: React.FC = () => {
  const [toggle, setToggle] = useState(true);
  const [moveBg, setMoveBg] = useState(false);

  // function to handle toggle and set toggle to opposite of it
  const handleToggle = () => {
    setToggle(!toggle);
  };

  const changeColor = (ev: Event) => {
    if (window.scrollY >= 300) {
			setMoveBg(false);
    } else {
      setMoveBg(true);
    }
	};
	
	useEffect(() => {
		if (typeof window !== "undefined") {
			window.addEventListener("scroll", changeColor);
		}

		// Clean up function
		return () => {
			if (typeof window !== "undefined") {
				window.removeEventListener("scroll", changeColor);
			}
		}
	}, [])

  //  variable style for CustomStyle from ListItems Component
  const LinkStyle =
    " w-full block py-3 px-0 hover:text-white hover:bg-[#0C4E12] pl-2 text-sm md:px-5 md:m-0 md:bg-[transparent]";

  return (
    <div className="z-10 fixed top-0 w-full bg-[#FBFBFB] md:flex justify-between md:items-center ">
      <div
        className={`mobile ${
          moveBg ? "bg-[#fbfbfb]" : " bg-[#222222]"
        }  relative flex items-center  px-3 justify-between w-full md:px-8   `}
      >
        <Logo />
        <div className="md:hidden">
          <HamBuger handleClick={handleToggle} toggle="your toggle string goes here" />
        </div>

        <div className="hidden md:flex md:items-center transition-all duration-500 ">
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
