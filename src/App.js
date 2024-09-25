import React from 'react';


//Components
import Section1 from './Components/Section1';
import Section2 from './Components/Section2';
import Sidebar from './Components/sidebar';
import TopNav from './Components/TopNav';
import Section3 from './Components/Section3';
// import Progressbar from './Components/Progressbar';



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
      
    <div className="Section4 mt-5 bg-red-800 h-[400px]] w-full">
      <div className="bgtable bg-blue-800 text-white  h-[300px] w-full">
      <thead>
        <tr>
          <th>ID</th>
          <th>Customer</th>
          <th>Date</th>
          <th>Total</th>
          <th>Method</th>
          <th>Status</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <td>001</td>
        <td>Manjil</td>
        <td>2000/01/14</td>
        <td>$2,456</td>
        <td>CC</td>
        <td className='text-yellow-500'>Pending</td>
        <td className='text-blue-500 cursor-pointer'>View Details</td>
      </tbody>
      </div>
      
    </div>


    </div>
    </div>
    </div>
  )
}

export default App;

