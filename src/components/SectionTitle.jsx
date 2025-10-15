import React from 'react';
import { HiOutlineArrowLongRight } from "react-icons/hi2";

const SectionTitle = ({name, button}) => {
    return (
        <div>
            <h3><span>#</span>{name}</h3>
            <div></div>
            <button>{button} <HiOutlineArrowLongRight /></button>
        </div>
    );
};

export default SectionTitle;