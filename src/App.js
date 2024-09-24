import React from 'react'

//Components
import Sidebar from './Components/sidebar';

const App = () => {
  return (
    <div>
      <div className="main-container w-full h-[100vh] flex">

      <Sidebar/>

    <div className="container h-full w-[85%] bg-red-700"></div>
    </div>
    </div>
  )
}

export default App;

