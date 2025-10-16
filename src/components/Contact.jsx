import React from "react";
import { FaDiscord } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import SectionTitle from "./SectionTitle";

const Contact = () => {
  return (
    <div className="max-w-[1220px] mx-auto px-[16px] xl:px-0 font-firacode">
      <SectionTitle name="contacts" />
      <div className="flex flex-col md:flex-row justify-between items-top text-white my-[30px]">
        <p className="w-full md:w-[505px] text-gray">
          I’m interested in freelance opportunities. However, if you have other
          request or question, don’t hesitate to contact me
        </p>
        <div className="border border-gray p-[20px] my-[10px]">
          <p>Message me here</p>
          <a href='#' className="text-gray flex items-center gap-[10px] my-[10px]">
            <FaDiscord className='text-[22px]' />
            <p>!Elias#3519</p>
          </a>
          <a href='#' className="text-gray flex items-center gap-[10px] my-[10px]">
            <IoIosMail className='text-[22px]' />
            <p>elias@elias.me</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
