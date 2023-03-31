import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Sidebar from './components/Sidebar/Sidebar';

function App() {
 

  return (
    <div className="App">
     
     
     <div className="header container  m-auto mb-3 ">
        <Header></Header>
      </div>
      
      <div className="main row container">
        <div className=" col-md-8">
        <Home></Home>
        </div>
        <div className="sideCart col-md-4 card">
         <Sidebar></Sidebar>
        </div>
      </div>

      
    </div>

  )
}

export default App
