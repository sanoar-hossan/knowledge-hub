import { useState } from 'react'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Sidebar from './components/Sidebar/Sidebar';
import Blog from './components/Blog/Blog';

function App() {
 

  const [readtime, setreadtime] = useState(0);

  const [bookmarks, setBookmarks] = useState([]);
    
  
    const handleReadTime = (time) => {
      
      setreadtime(readtime)
      
     }

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
     
     
     <div className="header container  m-auto mb-3 ">
        <Header></Header>
      </div>
      
      <div className="main row container">
        <div className=" col-md-8">
        <Home handleReadTime={handleReadTime} handleBookMark={handleBookMark}  ></Home>
        </div>
        <div className="sideCart col-md-4 card">
         <Sidebar readtime={readtime} bookmarks={bookmarks} ></Sidebar>
        </div>
        <Blog></Blog>
      </div>

      
    </div>

  )
}

export default App
