import React from 'react'

const Sidebar = () => {
return (
<div className="sidebar h-full w-[15%] bg-white ">

<div className="Topbar mt-3 bg-white h-auto flex justify-start w-full">
<img src="../images/logo.png" className="ml-2" alt="Logo"/>
<h1 className='font-mainfont font-bold text-2xl ml-3'>Jobins</h1>
<img src="../icons/indent-decrease.png" className="ml-20" alt="Logo"/>
</div>

<div className="mainmenu mt-10 bg-white h-auto w-full flex flex-col justify-start">
<h2 className='text-slate-500 font-mainfont font-semibold ml-3'>MAIN MENU</h2>

    <div className='DashRouter flex mt-3'>
    <img src="../icons/smart-home.png" className="h-[20px] w-[20px] mx-3" alt="Logo"/>
    <h1 className='text-slate-500 font-mainfont font-normal  cursor-pointer  hover:text-black hover:font-bold'>Dashboard</h1>
    </div>

    <div className='DashRouter flex mt-3'>
    <img src="../icons/shopping-cart.png" className="h-[20px] w-[20px] mx-3" alt="Logo"/>
    <h1 className='text-slate-500 font-mainfont font-normal cursor-pointer  hover:text-black hover:font-bold'>Order Management</h1>
    </div>

    <div className='DashRouter flex mt-3'>
    <img src="../icons/star.png" className="h-[20px] w-[20px] mx-3" alt="Logo"/>
    <h1 className='text-slate-500 font-mainfont font-normal cursor-pointer  hover:text-black hover:font-bold'>Brand</h1>
    </div>

</div>

<div className="Products mt-10 bg-white h-auto w-full flex flex-col justify-start">
<h2 className='text-slate-500 font-mainfont font-semibold ml-3'>PRODUCTS </h2>

    <div className='DashRouter flex mt-3'>
    <img src="../icons/circle-plus.png" className="h-[20px] w-[20px] mx-3" alt="Logo"/>
    <h1 className='text-slate-500 font-mainfont font-normal cursor-pointer  hover:text-black hover:font-bold'>Add Products</h1>
    </div>

    <div className='DashRouter flex mt-3'>
    <img src="../icons/box.png" className="h-[20px] w-[20px] mx-3" alt="Logo"/>
    <h1 className='text-slate-500 font-mainfont font-normal cursor-pointer  hover:text-black hover:font-bold'>Product List</h1>
    </div>

</div>



</div>
)
}

export default Sidebar;
