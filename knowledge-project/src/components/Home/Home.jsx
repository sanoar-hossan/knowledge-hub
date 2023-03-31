import React, { useEffect, useState } from 'react';
import SingleCard from '../SingleCard/SingleCard';
import Sidebar from '../Sidebar/Sidebar';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Home = ({handleReadTime,handleBookMark}) => {
    const [readtime, setReadtime] = useState(0);
    const [blogs,setblogs]=useState([])
useEffect(()=>{
    fetch('data.json')
    .then(res=>res.json())
    .then(data=>setblogs(data))
},[])



    return (
        <div>
            {
                
                blogs.map(blog=><SingleCard key={blog.blogId} blog={blog} handleReadTime={handleReadTime} handleBookMark={handleBookMark}></SingleCard>)
            }

            
            
        </div>
    );
};

export default Home;