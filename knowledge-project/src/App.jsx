import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Sidebar from './components/Sidebar/Sidebar';
import Blog from './components/Blog/Blog';

function App() {
 
  const [readTime, setTime] = useState(0);
   
  const handleReadTime = (time) => {
    
    setTime(parseInt(time)+readTime);
    
  };



   const [bookmarks, setBookmarks] = useState([]);
   const handleBookMark=(title)=>{
    if (bookmarks.includes(title)) {
      toast.error('Bookmark already exists!');
    } else {
      setBookmarks([...bookmarks, title]);
      toast.success('Bookmark added!');
    }
   }

  return (
    <div className="App">
     <ToastContainer />
     
     <div className="header mb-5 ">
        <Header></Header>
      </div>
      
      <div className="main row">
        <div className="home col-md-8">
        <Home handleReadTime={handleReadTime} handleBookMark={handleBookMark}  ></Home>
        </div>
        <div className="sidebar col-md-4 ">
         <Sidebar readTime={readTime}bookmarks={bookmarks} ></Sidebar>
        </div>
        <Blog></Blog>
      </div>

      
    </div>

  )
}

export default App
