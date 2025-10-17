import React, { useState } from "react";
import Logo from "../assets/logo.png";
import { FaChevronDown } from "react-icons/fa6";
import Menu from "../assets/menu.svg";
import Close from "../assets/close.svg";
import Github from "../assets/Github.svg";
import Dribble from "../assets/Dribble.svg";
import Figma from "../assets/Figma.svg";
import { Link, Outlet, useLocation } from "react-router-dom";

const Header = () => {
  const [nav, setNav] = useState();
  const handleClick = () => setNav(!nav);
  const [activeSection, setActiveSection] = useState('home');
  
  const navItems = [
    { name: "home", link: "/" },
    { name: "works", link: "/works" },
    { name: "about_me", link: "javascript:void(0)" },
    { name: "contacts", link: "javascript:void(0)" },
  ];
  return (
    <>
      <div className="sticky top-[-0.2px] w-full z-999">
        <div className="max-w-[1224px] h-[61px] mx-auto bg-[#282c33] px-[16px] xl:px-0 flex items-center justify-between font-firacode z-999">
          <Link to="/">
            <img src={Logo} alt="logo" />
          </Link>
          <nav className="hidden md:flex items-center gap-[32px] text-white">
            {navItems.map((itm, idx) => (
              <Link
                key={idx}
                to={itm.link}
                onClick={() => setActiveSection(itm.name)}
                className={`hover:opacity-100 duration-300 ${activeSection === itm.name ? 'opacity-100' : 'opacity-60'}`}
              >
                <span className="text-primary">#</span>
                {itm.name}
              </Link>
            ))}
            <div
              onClick={() => changeLanguage("ru")}
              className="flex items-center gap-[5px] cursor-pointer opacity-60 hover:opacity-100 duration-300"
            >
              <span>EN</span>
              <FaChevronDown />
            </div>
          </nav>
          <div onClick={handleClick} className="block md:hidden">
            <img src={nav ? Close : Menu} alt="menu_bar" />
          </div>
          <div
            className={`flex absolute top-[60px] w-full bg-[#282c33] md:hidden flex-col justify-between h-[96vh] gap-[15px] px-[16px] py-[30px] text-white -z-10 transition-all duration-500 ${
              nav ? "left-0" : "left-[-100%]"
            }`}
          >
            <div className="flex flex-col gap-[20px]">
              <nav className="flex flex-col gap-[20px]">
                {navItems.map((item, index) => (
                  <Link key={index} to={item.link} onClick={handleClick}>
                    <span className="text-primary">#</span>
                    {item.name}
                  </Link>
                ))}
              </nav>
              <div className="flex items-center gap-[5px] cursor-pointer opacity-60 hover:opacity-100 duration-300">
                <span>EN</span>
                <FaChevronDown />
              </div>
            </div>
            <div className="flex items-center justify-center gap-[10px] mx-auto my-[20px]">
              <a href="#" className="">
                <img src={Github} alt="" className="w-[40px]" />
              </a>
              <a href="#" className="">
                <img src={Dribble} alt="" className="w-[40px]" />
              </a>
              <a href="#" className="">
                <img src={Figma} alt="" className="w-[40px]" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Header;
