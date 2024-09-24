import React from 'react'

//Components
import Sidebar from './Components/sidebar';
import TopNav from './Components/TopNav';
import Section1 from './Components/Section1';
// import Progressbar from './Components/Progressbar';



const App = () => {
  return (
    <div>
      <div className="main-container w-full h-[100vh] flex">
<Sidebar/>

    <div className="container h-full w-[85%] bg-red-700">

    <TopNav/>
      <Section1/>



    </div>
    </div>
    </div>
  )
}

export default App;

