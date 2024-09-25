import React, { useState } from 'react';

//ICONS
import { FaAngleDown } from "react-icons/fa6";
import { IoSearch } from "react-icons/io5";


//MOCKDATA
import { mockdata } from '../mockdata';


const Section3 = () => {

    const [search,setSearch]=useState('');

return (
    <div className="SearchandList">
        <div className="Section3 mt-5 bg-containerGray h-auto w-full flex justify-between">
        <div className="rightSection flex">
        <div className="Status cursor-pointer p-2 w-[80px] md:w-[126px] h-[30px] md:h-[40px] flex justify-center items-center gap-2 bg-white rounded-lg">
        <h1 className='greytext font-mainfont font-normal'>Status:All</h1>
        <FaAngleDown color='grey'/>
        </div>
        <div className="searchbar flex">
        <input type="text"
            onChange={(e)=>setSearch(e.target.value)}

        placeholder="Search" className="greytext  w-[80px] p-2 md:w-[200px] h-[30px] md:h-[40px] flex justify-center items-center
        bg-white rounded-tl-lg rounded-bl-lg cursor-text"/>
        <IoSearch className='bg-white h-[20px] md:h-[40px] w-[20px] md:w-[40px] rounded-tr-lg rounded-br-lg cursor-pointer ml-[-12px] ' color='grey'/>
        </div>
        </div>

        <div className="Filter cursor-pointer p-2 w-auto h-[30px] md:h-[40px] flex justify-center items-center gap-2 bg-white rounded-lg ">
        <h1 className='greytext'>Filter by date range</h1>
        <FaAngleDown color='grey'/>
        </div>
    
    </div>

    <div className="List mt-5 greytext bg-red-800 h-auto w-full rounded-xl">
    <div className="bgtable text-white overflow-x-auto rounded-xl overflow-hidden">
        <table className='LIST min-w-full'>
        <thead>
            <tr className="w-full text-left bg-green-700">
            <th className="p-2 md:p-4">ID</th>
            <th className="p-2 md:p-4">Customer</th>
            <th className="p-2 md:p-4">Date</th>
            <th className="p-2 md:p-4">Total</th>
            <th className="p-2 md:p-4">Method</th>
            <th className="p-2 md:p-4">Status</th>
            <th className="p-2 md:p-4">Action</th>
            </tr>
        </thead>
        <tbody>
            {mockdata.filter((item)=>{
                return search==='' ? item
                    : item.Customer.includes(search);}
                ).map((item,ID) => (
            <tr key={item.ID} className="border-b">
                <td className="p-2 md:p-4 w-[20%]">{item.ID}</td>
                <td className="p-2 md:p-4 w-[25%]">{item.Customer}</td>
                <td className="p-2 md:p-4 w-[15%]">{item.Date}</td>
                <td className="p-2 md:p-4 w-[15%]">{item.Total}</td>
                <td className="p-2 md:p-4 w-[10%]">{item.Method}</td>
                <td className="p-2 md:p-4 w-[10%] text-yellow-500">{item.Status}</td>
                <td className="p-2 md:p-4 w-[10%] text-blue-500 cursor-pointer">View Details</td>
            </tr>
            ))}
        </tbody>
        </table>
    </div>
    

      {/* Pagination */}
    <div className="flex justify-between items-center mt-4">
        <div>
        <span>Showing</span>
        <select className="ml-2 p-1 border rounded">
            <option>10</option>
            <option>20</option>
            <option>30</option>
            <option>40</option>
            <option>50</option>
        </select>
        <span className="ml-2">of 50</span>
        </div>

        <div className="flex items-center space-x-2">
        <button className="px-3 py-1 border rounded">&lt;</button>
        <button className="px-3 py-1 border rounded bg-blue-500 text-white">1</button>
        <button className="px-3 py-1 border rounded">2</button>
        <button className="px-3 py-1 border rounded">3</button>
        <button className="px-3 py-1 border rounded">4</button>
        <button className="px-3 py-1 border rounded">5</button>
        <button className="px-3 py-1 border rounded">&gt;</button>
        </div>
    </div>
    </div>
    
    </div>

)
}

export default Section3
