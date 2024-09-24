import React from 'react'


//Components
import Progressbar from './progressbar';
//ICONS
import { FaAngleDown } from "react-icons/fa6";
import { FaChevronUp } from "react-icons/fa";

const Section1 = () => {
return (
<div className="Section1  flex flex-col md:flex-row w-full h-auto">

{/* //Salesand Cost */}
<div className="SalesandCost w-[398px] h-[180px]  md:h-auto md:w-[60%] bg-white mt-3 flex">
<img src="../images/business-and-finance.png" className=' bg-white  ml-2 mt-14 md:mt-16 h-[40px] w-[40px] md:h-[73px] md:w-[73px]' alt="business-and-finance"/>
<div className="SaleCosts flex flex-col md:ml-10">
<h1 className=' text-xs md:text-xl font-bold text-black font-mainfont ml-5 mt-3'>Total Sales <br className='block md:hidden'/>and Costs</h1>
<h2 className=' text-xs md:text-xl  font-normal text-slate-500 font-mainfont ml-5'>Last 7 days</h2>
<h1 className=' text-md md:text-3xl  font-bold text-black font-mainfont ml-5 mt-5'>$350K</h1>
<h2 className=' text-xs md:text-xl  font-normal text-slate-500 font-mainfont ml-5'><span className='text-green-600'>⬆️ 8.56K</span>   <br className='block md:hidden'/>VS Last 7 Days</h2>
</div>

<img src="../images/yen1.png" className=' bg-white mt-5 ml-3 h-[40px] w-[40px] md:h-[43px] md:w-[43px] md:ml-16' alt="Yen"/>
<div className="totalProfit">
<h1 className=' text-xs md:text-xl font-bold text-black font-mainfont ml-2 mt-3'>Total Profit </h1>
<h2 className=' text-xs md:text-xl font-normal text-slate-500 font-mainfont ml-2'>Last 7 days</h2>
<h1 className=' text-md md:text-3xl font-bold text-black font-mainfont ml-2 mt-8 md:mt-10' >50K</h1>
<h2 className=' text-xs md:text-xl font-normal text-slate-500 font-mainfont ml-2'><span className='text-green-600'>⬆️ 12%</span><br className='block md:hidden'/>VS Last 7 Days</h2>
</div>
</div>

{/* //CountryWiseSales */}
<div className="CountrywiseSales md:w-[450px] h-[180px] flex flex-col mt-3 md:ml-4 bg-white">
{/* US */}
<div className="us flex justify-between mt-3 gap-3">
<img src='../images/us.png' className='h-[40px] w-[40px]' alt='usa'/>
<div className="names flex flex-col">
<h1 className="Num font-bold font-mainfont text-sm  text-black">30k</h1>
<h2 className="name  font-normal font-mainfont text-xs text-slate-500">United States</h2>
</div>
<Progressbar percentage={25.8}/>
<FaChevronUp color='green'/>
<h2 className="percentage text-green-600 text-sm  font-semibold">25.8%</h2>
</div>

  {/* //BR */}
<div className="br flex justify-between mt-3 gap-3">
<img src='../images/br.png' className='h-[40px] w-[40px]' alt='br'/>
<div className="names flex flex-col">
<h1 className="Num font-bold font-mainfont text-sm  text-black">26k</h1>
<h2 className="name  font-normal font-mainfont text-xs text-slate-500">Brazil</h2>
</div>
<Progressbar percentage={16.2}/>
<FaAngleDown color='red'/>
<h2 className="percentage text-red-600 text-sm font-semibold "> 16.2%</h2>
</div>

{/* EU */}
<div className="eu flex justify-between mt-3 gap-3">
<img src='../images/au.png' className='h-[40px] w-[40px]' alt='eu'/>
<div className="names flex flex-col">
<h1 className="Num font-bold font-mainfont text-sm  text-black">26k</h1>
<h2 className="name  font-normal font-mainfont text-xs text-slate-500">Brazil</h2>
</div>
<Progressbar percentage={16.2}/>
<FaAngleDown color='red'/>
<h2 className="percentage text-red-600 text-sm font-semibold "> 16.2%</h2>
</div>

</div>

</div>
)
}

export default Section1;
