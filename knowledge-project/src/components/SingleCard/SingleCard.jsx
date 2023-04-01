import React from 'react';
import './SingleCard.css'
import { BookmarkIcon } from "@heroicons/react/solid";

const SingleCard = ({blog,handleReadTime,handleBookMark}) => {
    return (
        <div className="mb-5 border card w-100 m-auto col-md-6">
      
        <img className="w-100" src={blog.blogCoverImg} alt="" />
      <div className="area d-flex justify-content-between align-items-center">
      <div className="profile-title d-flex  ">
       
        <img className='img-author rounded-circle m-3'  src={blog.authorImg} alt="" />
        
        <div className="name-date m-3">
            <h2>{blog.authorName}</h2>
            <small className=''>{blog.publishDate}</small>
        </div>
      </div>
      <div className="timeAndRating d-flex justify-content-around ">
        <small className='m-3'>{blog.readTime} min read</small>
        <button onClick={()=>handleBookMark(blog.blogTitle)} className="flex items-center space-x-1 bg-white text-gray-800  rounded-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
        
      <BookmarkIcon className="h-1 w-1" />
      <span>Bookmark</span>
    </button>
    
    
        </div>
      </div>
      <h3>{blog.blogTitle}</h3>
      
      <a href="#" onClick={()=>handleReadTime(blog.readTime)}>Mark as read</a>
      
      
    </div>
    );
};

export default SingleCard;
