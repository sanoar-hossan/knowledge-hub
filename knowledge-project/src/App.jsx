import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Sidebar from './components/Sidebar/Sidebar';
import Blog from './components/Blog/Blog';

function App() {
 

const [readtime, setReadtime] = useState(0);
  

  const handleReadTime = (time) => {
    setReadtime(time);
   

 }

  return (
    <div className="App">
     
     
     <div className="header container  m-auto mb-3 ">
        <Header></Header>
      </div>
      
      <div className="main row container">
        <div className=" col-md-8">
        <Home handleReadTime={handleReadTime}  ></Home>
        </div>
        <div className="sideCart col-md-4 card">
         <Sidebar readtime={readtime} ></Sidebar>
        </div>
        <Blog></Blog>
      </div>

      
    </div>

  )
}

export default App
