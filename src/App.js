import React from 'react';


//Components
import Section1 from './Components/Section1';
import Section2 from './Components/Section2';
import Sidebar from './Components/sidebar';
import TopNav from './Components/TopNav';
import Section3 from './Components/Section3';
// import Progressbar from './Components/Progressbar';

//MOCKDATA
import {mockdata} from './mockdata';

const App = () => {

  return (
    <div>
      <div className="main-container w-full bg-containerGray h-[100vh] flex">
<Sidebar/>

    <div className="container h-full w-[85%] md:mx-5 bg-containerGray">

    <TopNav/>
    <Section1/>
    <Section2/>
    <Section3/>
      
    <div className="Section4 mt-5 greytext bg-red-800 h-[400px] w-full rounded-xl">
      <div className="bgtable text-white  h-[700px] w-full overflow-x-auto rounded-xl overflow-hidden">
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
            {mockdata.map((item,ID) => (
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
      
    </div>


    </div>
    </div>
    </div>
  )
}

export default App;

