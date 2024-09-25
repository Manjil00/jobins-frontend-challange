import React from 'react';

//ICONS
import { FaAngleDown } from "react-icons/fa6";
import { IoSearch } from "react-icons/io5";

const Section3 = () => {
return (
<div className="Section3 mt-5 bg-containerGray h-auto w-full flex justify-between">
        <div className="rightSection flex">
        <div className="Status cursor-pointer p-2 w-[80px] md:w-[126px] h-[30px] md:h-[40px] flex justify-center items-center gap-2 bg-white rounded-lg">
        <h1 className='greytext font-mainfont font-normal'>Status:All</h1>
        <FaAngleDown color='grey'/>
        </div>
        <div className="searchbar flex">
        <input type="text" placeholder="Search" className="greytext  w-[80px] p-2 md:w-[200px] h-[30px] md:h-[40px] flex justify-center items-center
        bg-white rounded-tl-lg rounded-bl-lg cursor-text"/>
        <IoSearch className='bg-white h-[40px] w-[40px] rounded-tr-lg rounded-br-lg cursor-pointer ml-[-12px] ' color='grey'/>
        </div>
        </div>

        <div className="Filtercursor-pointer p-2 w-[80px] md:w-auto h-[30px] md:h-[40px] flex justify-center items-center gap-2 bg-white rounded-lg ">
        <h1 className='greytext'>Filter by date range</h1>
        <FaAngleDown color='grey'/>
        </div>
    
    </div>
)
}

export default Section3
