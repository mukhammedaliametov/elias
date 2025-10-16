import React from "react";
import AboutImg from "../assets/about_img.png";
import SectionTitle from "./SectionTitle";
import { HiOutlineArrowLongRight } from "react-icons/hi2";

const About = () => {
  return (
    <div className="max-w-[1220px] mx-auto px-[16px] xl:px-0 font-firacode text-white">
      <SectionTitle name="about-me" />
      <div className="flex flex-col-reverse md:flex-row gap-[20px] items-center justify-between">
        <div className="w-full flex flex-col gap-[20px] text-[16px]/[28px] md:w-[615px] text-gray">
          <p>Hello, i’m Elias!</p>
          <p>
            I’m a self-taught front-end developer based in Kyiv, Ukraine. I can
            develop responsive websites from scratch and raise them into modern
            user-friendly web experiences.{" "}
          </p>
          <p>
            Transforming my creativity and knowledge into a websites has been my
            passion for over a year. I have been helping various clients to
            establish their presence online. I always strive to learn about the
            newest technologies and frameworks.
          </p>
          <div>
          <button className="flex items-center gap-[10px] py-[5px] px-[15px] border border-primary cursor-pointer">Read more <HiOutlineArrowLongRight /></button>
          </div>
        </div>
        <div>
          <img src={AboutImg} alt="about_img" />
        </div>
      </div>
    </div>
  );
};

export default About;
