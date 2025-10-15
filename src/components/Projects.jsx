import React from 'react';
import SectionTitle from './SectionTitle';
import Portfolio1 from '../assets/portfolio1.png';
import Portfolio2 from '../assets/portfolio2.png';
import Portfolio3 from '../assets/portfolio3.png';
import { HiMiniLink, HiOutlineArrowLongRight } from "react-icons/hi2";

const Projects = () => {
    const projectItems = [
        {img: Portfolio1, tech: 'HTML SCSS Python Flask', name: 'ChertNodes', info: 'Minecraft servers hosting '},
        {img: Portfolio2, tech: 'React Express Discord.js Node.js HTML SCSS Python Flask', name: 'ProtectX', info: 'Discord anti-crash bot'},
        {img: Portfolio3, tech: 'CSS Express Node.js', name: 'Kahoot Answers Viewer', info: 'Get answers to your kahoot quiz'},
    ]
    return (
        <div className='max-w-[1220px] mx-auto px-[16px] xl:px-0 mt-[60px] text-white font-firacode'>
            <SectionTitle  name='projects' button='view all' />
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[30px] pt-[20px]'>
                {projectItems.map((itm, idx) => (
                    <div key={idx} className='border text-gray'>
                        <img src={itm.img} alt="img" className='w-full' />
                        <p className='p-[8px] border-b border-gray'>{itm.tech}</p>
                        <div className='p-[15px]'>
                            <h3 className='text-[24px] font-[500] text-white'>{itm.name}</h3>
                            <p className='my-[10px]'>{itm.info}</p>
                            <button className='border border-primary flex items-center gap-[1px] py-[6px] px-[25px] cursor-pointer'>Live <HiMiniLink /></button>
                        </div>
                    </div>
                ))}
            </div>
            <a href='#' className='flex justify-center md:hidden border border-gray py-[10px] px-[15px] mt-[20px] text-[16px] items-center gap-[8px] capitalize hover:text-primary duration-300 cursor-pointer'>View All <HiOutlineArrowLongRight className='text-[25px]' /></a>
        </div>
    );
};

export default Projects;