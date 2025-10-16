import React from "react";
import Logo from "../assets/logo.png";
import Github from "../assets/Github.svg";
import Dribble from "../assets/Dribble.svg";
import Figma from "../assets/Figma.svg";

const Footer = () => {
  return (
    <div className="max-w-[1220px] mx-auto px-[16px] xl:px-0 font-firacode text-white border-t border-gray pt-[30px]">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
        <div>
          <div className="flex items-center gap-[10px]">
            <img src={Logo} alt="logo" />
            <a href="mailto: elias@elias-dev.ml" className="text-gray">elias@elias-dev.ml</a>
          </div>
          <p className="mt-[10px]">Web designer and front-end developer</p>
        </div>
        <div>
          <h2>Media</h2>
          <div className="flex gap-[10px] mt-[15px]">
            <a href="#" className="">
              <img src={Github} alt="" className="w-[30px]" />
            </a>
            <a href="#" className="">
              <img src={Dribble} alt="" className="w-[30px]" />
            </a>
            <a href="#" className="">
              <img src={Figma} alt="" className="w-[30px]" />
            </a>
          </div>
        </div>
      </div>
      <div className="flex justify-center text-gray pt-[40px] pb-[20px]">
        <p>
          © Copyright 2022. Made by <a href="https://t.me/ametovme">Ametov.M</a>
        </p>
      </div>
    </div>
  );
};

export default Footer;
