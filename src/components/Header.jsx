import React, { useState } from "react";
import Logo from "../assets/logo.png";
import { FaChevronDown } from "react-icons/fa6";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";
import Menu from "../assets/menu.svg";
import Close from "../assets/close.svg";
import Github from '../assets/Github.svg';
import Dribble from '../assets/Dribble.svg';
import Figma from '../assets/Figma.svg';

const Header = () => {
  const [nav, setNav] = useState();
  const handleClick = () => setNav(!nav);
  const navItems = [
    { name: "home", link: "#" },
    { name: "works", link: "#" },
    { name: "about-me", link: "#" },
    { name: "contacts", link: "#" },
  ];
  return (
    <div className="fixed w-full max-w-[1224px] h-[61px] mx-auto px-[16px] xl:px-0 flex items-center justify-between font-firacode z-999">
      <a href="#">
        <img src={Logo} alt="logo" />
      </a>
      <nav className="hidden md:flex items-center gap-[32px] text-white">
        {navItems.map((itm, idx) => (
          <a
            key={idx}
            href={itm.link}
            className="opacity-60 hover:opacity-100 duration-300 nth-[1]:opacity-100"
          >
            <span className="text-primary">#</span>
            {itm.name}
          </a>
        ))}
        <div className="flex items-center gap-[5px] cursor-pointer opacity-60 hover:opacity-100 duration-300">
          <span>EN</span>
          <FaChevronDown />
        </div>
      </nav>
      <div onClick={handleClick} className="block md:hidden">
        <img src={nav ? Close : Menu} alt="menu_bar" />
      </div>
      <div className={`absolute top-[80px] w-full bg-[#282c33] flex flex-col justify-between h-[100%] gap-[15px] px-[16px] text-white transition-all duration-500 ${nav ? 'left-0' : 'left-[-100%]'}`}>
        <div className="flex flex-col gap-[20px]">
            <nav className="flex flex-col gap-[20px]">
            {navItems.map((item, index) => (
            <a key={index} href={item.link}><span className="text-primary">#</span>{item.name}</a>
        ))}
        </nav>
        <div className="flex items-center gap-[5px] cursor-pointer opacity-60 hover:opacity-100 duration-300">
          <span>EN</span>
          <FaChevronDown />
        </div>
        </div>
        <div className="flex items-center gap-[10px] mx-auto my-[20px]">
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
  );
};

export default Header;
