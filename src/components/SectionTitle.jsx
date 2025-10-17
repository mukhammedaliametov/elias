import React from 'react';
import { HiOutlineArrowLongRight } from "react-icons/hi2";

const SectionTitle = ({name, button, link}) => {
    return (
        <div className='flex justify-between items-center text-white font-firacode pt-[30px]'>
            <div className='flex items-center w-full md:w-[90%]'>
                <h3 className='text-[25px] md:text-[32px] font-[500]'><span className='text-primary'>#</span>{name}</h3>
            <div className='hidden md:block w-[50%] h-[1px] bg-primary mx-[20px]'></div>
            </div>
            <a href={link} className='hidden md:flex text-[16px] items-center gap-[8px] capitalize hover:text-primary duration-300 cursor-pointer'>{button} {button !== undefined && <HiOutlineArrowLongRight className='text-[25px]' />}</a>
        </div>
    );
};

export default SectionTitle;