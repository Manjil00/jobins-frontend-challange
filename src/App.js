import React from 'react'

//Components
import Sidebar from './Components/sidebar';

const App = () => {
  return (
    <div>
      <div className="main-container w-full h-[100vh] flex">
<Sidebar/>

    <div className="container h-full w-[85%] bg-red-700">

      {/* //Navbar */}
      <div className="dashNav flex justify-between items-center bg-white mt-3">

      <h1 className='font-mainfont font-bold text-lg md:text-2xl ml-3'>Dashboard</h1>

      <div className="ACTIONS flex mx-5 gap-4">
        <img src="../icons/Notification.png" className="cursor-pointer" alt="Notifications"/>
        <img src="../icons/Avatar.png" className="cursor-pointer" alt="Avatar"/>
        </div>
      </div>

      <div className="section-1 grid grid-cols-1 md:grid-cols-2 w-full h-full lg:h-[199px]">

        {/* //Salesand Cost */}
      <div className="SalesandCost w-[398px] h-[180px]  md:h-[199px] bg-white mt-3 flex ">
      <img src="../images/business-and-finance.png" className=' bg-white  ml-2 mt-16 h-[40px] w-[40px] md:h-auto md:w-auto' alt="business-and-finance"/>
      <div className="SaleCosts flex flex-col">
        <h1 className=' text-xs font-bold text-black font-mainfont ml-5 mt-3'>Total Sales and Costs</h1>
        <h2 className=' text-xs font-normal text-slate-500 font-mainfont ml-5'>Last 7 days</h2>
        <h1 className=' text-md font-bold text-black font-mainfont ml-5 mt-5'>$350K</h1>
        <h2 className=' text-xs font-normal text-slate-500 font-mainfont ml-5'><span className='text-green-600'>⬆️ 8.56K</span>   VS Last 7 Days</h2>
        




      </div>
      </div>

        {/* //TotalProfit */}
      <div className="TotalProfit">

      </div>



      </div>



    </div>
    </div>
    </div>
  )
}

export default App;

