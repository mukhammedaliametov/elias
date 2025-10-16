import React from "react";
import SectionTitle from "./SectionTitle";
import SkillsImg from '../assets/skills_img.png';

const Skills = () => {
  return (
    <div className="max-w-[1220px] mx-auto px-[16px] xl:px-0 font-firacode">
      <SectionTitle name="skills" />
      <div className="flex flex-col md:flex-row gap-[20px] items-start justify-between my-[20px]">
        <div>
          <img src={SkillsImg} alt="skills_img" />
        </div>
        <div className="flex flex-col md:flex-row items-start gap-[20px]">
          <div className="w-full md:w-auto">
            <div className="w-full md:max-w-[208px] text-white border border-gray">
              <p className="py-[6px] px-[10px] border-b border-gray mb-[10px]">Languages</p>
              <span className="px-[10px] block pb-[10px]">TypeScript
              Lua
              Python
              JavaScript</span>
            </div>
          </div>
          <div className="flex flex-row md:flex-col gap-[20px]">
            <div className="w-full md:max-w-[208px] text-white border border-gray">
              <p className="py-[6px] px-[10px] border-b border-gray mb-[10px]">Databases</p>
              <span className="px-[10px] block pb-[10px]">SQLite
              PostgreSQL
              Mongo</span>
            </div>
            <div className="w-full md:max-w-[208px] text-white border border-gray">
              <p className="py-[6px] px-[10px] border-b border-gray mb-[10px]">Other</p>
              <span className="px-[10px] block pb-[10px]">HTML
              Css
              EJS
              SCSS
              Rest
              JinJa</span>
            </div>
          </div>
          <div className="flex flex-col gap-[20px]">
            <div className="w-full md:max-w-[208px] text-white border border-gray">
              <p className="py-[6px] px-[10px] border-b border-gray mb-[10px]">Tools</p>
              <span className="px-[10px] block pb-[10px]">VSCode Neovim Linux{" "}
              Lua Figma XFCE{" "}
              Arch Git Font Awesome</span>
            </div>
            <div className="w-full md:max-w-[208px] text-white border border-gray">
              <p className="py-[6px] px-[10px] border-b border-gray mb-[10px]">Frameworks</p>
              <span className="px-[10px] block pb-[10px]">React
              Vue
              Lua
              Disnake
              Discord.js
              JavaScript
              Flask
              Express.js</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
