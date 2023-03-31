import React, { useEffect, useState } from 'react';
import SingleCard from '../SingleCard/SingleCard';

const Home = ({handleReadTime}) => {
    
    const [blogs,setblogs]=useState([])
useEffect(()=>{
    fetch('data.json')
    .then(res=>res.json())
    .then(data=>setblogs(data))
},[])



    return (
        <div>
            {
                
                blogs.map(blog=><SingleCard key={blog.blogId} blog={blog} handleReadTime={handleReadTime}></SingleCard>)
            }
            
        </div>
    );
};

export default Home;