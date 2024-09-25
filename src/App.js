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

    </div>
    </div>
    </div>
  )
}

export default App;

