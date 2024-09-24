import React from 'react';

const Sidebar = () => {
return (
<div className="sidebar h-full w-[30%] md:w-[15%] bg-white ">

<div className="Topbar mt-3 bg-white h-auto flex justify-start items-start w-full">
<img src="../images/logo.png" className="ml-2 h-[20px] w-[20px] md:h-auto md-w-auto" alt="Logo"/>
<h1 className='font-mainfont font-bold text-sm md:text-2xl md:ml-3'>Jobins</h1>
<img src="../icons/indent-decrease.png" className="cursor-pointer h-[20px] w-[20px] md:h-auto md:w-auto ml-5 xl:ml-10" alt="indent"/>
</div>

<div className="mainmenu mt-10 bg-white h-auto w-full flex flex-col justify-start">
<h2 className='text-slate-500 font-mainfont font-normal ml-3 text-xs md:text-sm'>MAIN MENU</h2>

    <div className='Dash-Router flex mt-3'>
    <img src="../icons/smart-home.png" className="h-[20px] w-[20px] ml-3 md:mx-3" alt="Logo"/>
    <h1 className='text-slate-500 font-mainfont font-normal  cursor-pointer text-xs md:text-sm hover:text-black hover:font-bold'>Dashboard</h1>
    </div>

    <div className='OrderManagement-Router flex mt-3'>
    <img src="../icons/shopping-cart.png" className="h-[20px] w-[20px] ml-3 md:mx-3" alt="Logo"/>
    <h1 className='text-slate-500 font-mainfont font-normal cursor-pointer text-xs md:text-sm hover:text-black hover:font-bold'>Order <br/>Management</h1>
    </div>

    <div className='Brand-Router flex mt-3'>
    <img src="../icons/star.png" className="h-[20px] w-[20px] ml-3 md:mx-3" alt="Logo"/>
    <h1 className='text-slate-500 font-mainfont font-normal cursor-pointer text-xs md:text-sm hover:text-black hover:font-bold'>Brand</h1>
    </div>

</div>

<div className="PRODUCTS mt-10 bg-white h-auto w-full flex flex-col justify-start">
<h2 className='text-slate-500 font-mainfont font-normal text-xs md:text-sm ml-3 md:mx-3'>PRODUCTS </h2>

    <div className='ADD-Router flex mt-3'>
    <img src="../icons/circle-plus.png" className="h-[20px] w-[20px] ml-3 md:mx-3" alt="Logo"/>
    <h1 className='text-slate-500 font-mainfont font-normal cursor-pointer text-xs md:text-sm hover:text-black hover:font-bold'>Add Products</h1>
    </div>

    <div className='LIST-Router flex mt-3'>
    <img src="../icons/box.png" className="h-[20px] w-[20px] ml-3 md:mx-3" alt="Logo"/>
    <h1 className='text-slate-500 font-mainfont font-normal cursor-pointer text-xs md:text-sm hover:text-black hover:font-bold'>Product List</h1>
    </div>

</div>



</div>
)
}

export default Sidebar;
