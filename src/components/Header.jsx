import React from "react";
import { useState, useEffect } from "react";
import headermobile from "../assets/images/bg-header-mobile.svg";
import headerDesktop from "../assets/images/bg-header-desktop.svg";

const Header = () => {
  const [viewImage, setViewImage] = useState(headermobile);

  useEffect(() => {
    if (window.innerWidth > 475) {
      setViewImage(headerDesktop);
    }
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 475) {
        setViewImage(headerDesktop);
      } else if (window.innerWidth < 457) {
        setViewImage(headermobile);
      }
    };

    window.addEventListener("resize", handleResize);
  }, []);

  return (
    <header>
      <img src={viewImage} alt="header" className="bg-cyan-300 w-full" />
    </header>
  );
};

export default Header;
