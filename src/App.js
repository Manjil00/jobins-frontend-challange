import React from 'react';


//Components
import Section1 from './Components/Section1';
import Section2 from './Components/Section2';
import Sidebar from './Components/sidebar';
import TopNav from './Components/TopNav';
import Section3 from './Components/Section3';
// import Progressbar from './Components/Progressbar';



const App = () => {

  const data = [
    { id: '#5089', customer: 'Joseph Wheeler', date: '6 April, 2023', total: '$2,564', method: 'CC', status: 'Pending' },
    { id: '#5089', customer: 'Joseph Wheeler', date: '6 April, 2023', total: '$2,564', method: 'CC', status: 'Pending' },
    { id: '#5089', customer: 'Joseph Wheeler', date: '6 April, 2023', total: '$2,564', method: 'CC', status: 'Pending' },
    { id: '#5089', customer: 'Joseph Wheeler', date: '6 April, 2023', total: '$2,564', method: 'CC', status: 'Pending' },
    { id: '#5089', customer: 'Joseph Wheeler', date: '6 April, 2023', total: '$2,564', method: 'CC', status: 'Pending' }
  ];


  return (
    <div>
      <div className="main-container w-full bg-containerGray h-[100vh] flex">
<Sidebar/>

    <div className="container h-full w-[85%] md:mx-5 bg-containerGray">

    <TopNav/>
    <Section1/>
    <Section2/>
    <Section3/>
      
    <div className="Section4 mt-5 greytext bg-red-800 h-[400px]] w-full rounded-xl">
      <div className="bgtable text-white  h-auto w-full overflow-x-auto rounded-xl overflow-hidden">
        <table className='LIST min-w-full bg-red-600 '>
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
            {data.map((row, index) => (
              <tr key={index} className="border-b">
                <td className="p-2 md:p-4 w-[20%]">{row.id}</td>
                <td className="p-2 md:p-4 w-[25%]">{row.customer}</td>
                <td className="p-2 md:p-4 w-[15%]">{row.date}</td>
                <td className="p-2 md:p-4 w-[15%]">{row.total}</td>
                <td className="p-2 md:p-4 w-[10%]">{row.method}</td>
                <td className="p-2 md:p-4 w-[10%] text-yellow-500">{row.status}</td>
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

