import React, { useEffect, useState } from 'react';
import SingleCard from '../SingleCard/SingleCard';
import Sidebar from '../Sidebar/Sidebar';

const Home = ({handleReadTime,handleBookMark}) => {
    
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