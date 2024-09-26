import React, { useEffect } from 'react';


//Components
import Section1 from './Components/Section1';
import Section2 from './Components/Section2';
import Section3 from './Components/Section3';
import Sidebar from './Components/sidebar';
import TopNav from './Components/TopNav';
// import Progressbar from './Components/Progressbar';

//ANIMATIONS IMPORT
import Aos from 'aos';
import 'aos/dist/aos.css';

const App = () => {

  const offset = 300;
  const duration = 800;

  useEffect(()=>{
    document.title = "Jobins Dashboard";
    Aos.init({offset:100,duration:800});
},[offset,
    duration])

  return (
    <div>
      <div className="main-container w-full bg-containerGray h-[100vh] flex">
  <div className="aos" data-aos="fade-right"><Sidebar/></div>

    <div className="container h-full w-[85%] md:mx-5 bg-containerGray">

    <div className="aos"data-aos="fade-up"> <TopNav/></div>
    <Section1/>
     {/* animations added in components in section 1 */}
    <div className="aos" data-aos="fade-up"><Section2/></div>
    <div className="aos" data-aos="fade-up"><Section3/></div>
  
    </div>
    </div>
    </div>
  )
}

export default App;

