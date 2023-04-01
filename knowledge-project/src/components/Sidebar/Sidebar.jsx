import React from 'react';
import './sidebar.css'

const Sidebar = ({readTime,bookmarks}) => {
 

   

    return (
        <div className="sidebar">
            <div className="spend-time ">
        <h3 className=''>Spent time on read:{readTime}min</h3>      
      </div>
      <div className="bookmark">
        <h3 className='bookmark-time'>Bookmarked Blogs:{bookmarks.length}</h3>
        <div className='card-body mb-4'>
        {bookmarks.map((bookmark) => (
            <div className='card mb-3' key={bookmark}>{bookmark}</div>
          ))}
            
        </div>
      </div>
        </div>
    );
};

export default Sidebar;