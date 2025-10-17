import React from "react";
import HeroImg from "../assets/hero_img.png";
import { GiCube } from "react-icons/gi";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import About from "../components/About";
import Contact from "../components/Contact";
import Bracket from '../assets/bracket.svg';

const Hero = () => {
  return (
    <>
      <div className="max-w-[1220px] mx-auto px-[16px] xl:px-0 mt-[55px] flex flex-col-reverse md:flex-row items-center justify-between font-firacode text-white">
        <div data-aos="fade-up">
          <h1 className="w-full md:w-[537px] text-[26px] md:text-[32px] font-[600] pt-[20px] md:mt-0">
            Elias is a <span className="text-primary">web designer</span> and{" "}
            <span className="text-primary">front-end developer</span>
          </h1>
          <p className="font-[400] text-gray w-full md:w-[463px] my-[20px]">
            He crafts responsive websites where technologies meet creativity
          </p>
          <button className="border border-primary py-[10px] px-[14px] md:px-[20px] text-white cursor-pointer hover:shadow-sm duration-300 shadow-primary">
            Contact me!!
          </button>
        </div>
        <div data-aos="fade-up">
          <img src={HeroImg} alt="hero_img" className="w-full md:w-[450px]" />
          <div className="border border-white py-[5px] px-[20px]">
            <p className="text-gray font-[500] flex items-center gap-[10px] text-[12px] md:text-[14px] lg:text-[16px]">
              <GiCube className="text-primary text-[20px]" /> Currently working
              on <span className="text-white">Portfolio</span>
            </p>
          </div>
        </div>
      </div>
      <div className="relative w-full md:max-w-[550px] flex flex-col items-end px-[20px] xl:px-0 md:mx-auto mt-[50px] font-firacode text-white">
        <img src={Bracket} alt="bracket_1" width={'20px'} className="absolute left-[20px] top-[-6px]" />
        <img src={Bracket} alt="bracket_2" width={'20px'} className="absolute right-[10px] bottom-[40px]" />
        <div className="border border-gray py-[20px] px-[30px] md:text-[18px] font-[500]">
            <p>With great power comes great electricity bill</p>
        </div>
        <div className="inline-flex justify-end py-[10px] px-[15px] border border-gray ">
            <p>- Dr. Who</p>
        </div>
      </div>
      <Projects />
      <Skills />
      <About />
      <Contact />
    </>
  );
};

export default Hero;
