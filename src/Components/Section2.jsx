import React from 'react'

//Comnponents
import VerticalLine from './VerticalLine';

const Section2 = () => {
return (
<div className="Section2 w-full h-auto  mt-3 bg-white rounded-xl flex flex-col">

<div className="upperPart flex flex-col md:flex-row justify-center items-center">
<div className="part1&2 flex justify-center items-center mt-4">

{/* Part1 */}
<div className="credentials flex md:mr-20">
<img src="../images/Avatar_pfp.png"  className='h-[40px] w-[40px] md:h-[80px] md:w-[80px]' alt='pfpavatar'/>
<div className="name flex flex-col">
<h1 className='ml-3 text-sm md:text-xl font-mainfont text-black'>Robert Fox</h1>
<h2 className='greytext'>robert@gmail.com</h2>
</div>
</div>

<VerticalLine/>

{/* Part2 */}
<div className="info gap-3 md:ml-20 md:mr-20">
<h1 className='greytext'>PERSONAL INFORMATION</h1>
<h1 className=' text-black font font-mainfont  text-xs md:text-sm mt-6'>Contact Number: <span className='text-xs md:text-sm text-slate-500 font-mainfont font-normal'>(201) 555-0124</span></h1>
<h1 className=' text-black font font-mainfont  text-xs md:text-sm'>Date of Birth:<span className='ml-2 greytext'>1,Jan, 1985</span></h1>
<h1 className=' text-black font font-mainfont text-xs md:text-sm'>Member Since:<span className='ml-2 greytext'>3,March,2023</span></h1>
</div>
<VerticalLine/>
</div>


{/* Part3 */}
<div className="shippingAddress  h-auto md:h-auto md:mt-0 md:ml-20 mt-4 ">
<h1 className='greytext'>SHIPPING ADDRESS</h1>
<h1 className='text-black font-mainfont text-xs md:text-sm mt-3 md:mt-5 '>3517 W.Gray St. Utica, Pennsylvania 578667</h1>

<div className="shippingInsights flex  ">
<h1 className='text-black font-mainfont font-bold text-sm md:text-xl mt-3'>150 <span className='greytext'> <br/>Total Order </span></h1>
<h1 className='text-black font-mainfont font-bold text-sm md:text-xl mt-3 ml-8'>140 <span className='greytext'> <br/>Completed </span></h1>
<h1 className='text-black font-mainfont font-bold text-sm md:text-xl mt-3 ml-8'>10 <span className='greytext'> <br/>Canceled </span></h1>
</div>
</div>
</div>

<div className="options rounded-b-xl h-[50px] w-full mt-4 md:mt-5 gap-5 flex cursor-pointer" >
    <div className="line  h-[45px] bg-white  hover:bg-blue-700 ml-5">
    <h1 className='font-mainfont h-[40px] w-auto text-xs md:text-sm  bg-white p-2'>All Orders</h1>
    </div>

    <div className="line  h-[45px] bg-white  hover:bg-blue-700 ml-5 cursor-pointer">
    <h1 className='font-mainfont h-[40px] w-auto text-xs md:text-sm bg-white p-2'>Completed</h1>
    </div>

    <div className="line h-[45px] bg-white hover:bg-blue-700 ml-5 cursor-pointer">
    <h1 className='font-mainfont h-[40px] w-auto text-xs md:text-sm bg-white p-2'>Canceled</h1>
    </div>
</div>

</div>
)
}

export default Section2;
