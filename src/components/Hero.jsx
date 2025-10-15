import React from 'react';
import HeroImg from '../assets/hero_img.png';
import { GiCube } from "react-icons/gi";

const Hero = () => {
    return (
        <div className='max-w-[1220px] mx-auto px-[16px] xl:px-0 mt-[55px] flex flex-col-reverse md:flex-row items-center justify-between font-firacode text-white'>
            <div>
                <h1 className='w-full md:w-[537px] text-[26px] md:text-[32px] font-[600] pt-[20px] md:mt-0'>Elias is a <span className='text-primary'>web designer</span> and <span className='text-primary'>front-end developer</span></h1>
                <p className='font-[400] text-gray w-full md:w-[463px] my-[20px]'>He crafts responsive websites where technologies meet creativity</p>
                <button className='border border-primary py-[10px] px-[14px] md:px-[20px] text-white cursor-pointer hover:shadow-sm duration-300 shadow-primary'>Contact me!!</button>
            </div>
            <div>
                <img src={HeroImg} alt="hero_img" className='w-full md:w-[450px]' />
                <div className='border border-white py-[5px] px-[20px]'>
                    <p className='text-gray font-[500] flex items-center gap-[10px] text-[12px] md:text-[14px] lg:text-[16px]'><GiCube className='text-primary text-[20px]' /> Currently working on <span className='text-white'>Portfolio</span></p>
                </div>
            </div>
        </div>
    );
};

export default Hero;