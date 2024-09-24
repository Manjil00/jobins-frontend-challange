import React from 'react'

//Components
import sidebar from './Components/sidebar';

const App = () => {
  return (
    <div>
      <div className="main-container w-full h-[100vh] flex">

      <sidebar/>

    <div className="container h-full w-[85%] bg-red-700"></div>
    </div>
    </div>
  )
}

export default App;

