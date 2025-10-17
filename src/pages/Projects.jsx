import React from "react";
import SectionTitle from "../components/SectionTitle";
import Portfolio1 from '../assets/portfolio1.png';
import Portfolio2 from '../assets/portfolio2.png';
import Portfolio3 from '../assets/portfolio3.png';
import Portfolio4 from '../assets/portfolio4.png';
import Portfolio5 from '../assets/portfolio5.png';
import { HiMiniLink } from "react-icons/hi2";

const Projects = () => {
  const projectItems = [
    {
      img: Portfolio1,
      tech: "HTML SCSS Python Flask",
      name: "ChertNodes",
      info: "Minecraft servers hosting ",
    },
    {
      img: Portfolio2,
      tech: "React Express Discord.js Node.js HTML SCSS Python Flask",
      name: "ProtectX",
      info: "Discord anti-crash bot",
    },
    {
      img: Portfolio3,
      tech: "CSS Express Node.js",
      name: "Kahoot Answers Viewer",
      info: "Get answers to your kahoot quiz",
    },
    {
      img: Portfolio4,
      tech: "HTML CSS JS",
      name: "Kotik Bot",
      info: "Multi-functional discord bot",
    },
    {
      img: Portfolio5,
      tech: "Vue TS Less",
      name: "Portfolio",
      info: "You’re using it rn",
    },
  ];
  return (
    <div className="max-w-[1220px] mx-auto px-[16px] xl:px-0 pt-[30px] font-firacode text-white mb-[50px]">
      <div className="">
        <h2 className="text-[35px] ">
          <span className="text-primary">/</span>projects
        </h2>
        <p className="mt-[10px]">Life of my projects</p>
      </div>
      <div>
        <SectionTitle name="complete-projects" />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[30px] pt-[20px]">
        {projectItems.map((itm, idx) => (
          <div data-aos="fade-up" key={idx} className="border text-gray">
            <img src={itm.img} alt="img" className="w-full" />
            <p className="p-[8px] border-b border-gray">{itm.tech}</p>
            <div className="p-[15px]">
              <h3 className="text-[24px] font-[500] text-white">{itm.name}</h3>
              <p className="my-[10px]">{itm.info}</p>
              <button className="border border-primary flex items-center gap-[1px] py-[6px] px-[25px] cursor-pointer">
                Live <HiMiniLink />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
