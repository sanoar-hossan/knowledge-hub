import React from 'react';
import './SingleCard.css'

const SingleCard = ({blog}) => {
    return (
        <div className="mb-5 border-card w-100 m-auto col-md-6">
      
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
        <small className='m-3'>{blog.readTime}</small>
        <button>bookmark</button>
        </div>
      </div>
      <h3>{blog.blogTitle}</h3>
      <a href="#">Mark as read</a>
    </div>
    );
};

export default SingleCard;