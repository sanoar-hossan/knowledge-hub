import React from 'react';

const Sidebar = ({readtime,bookmarks}) => {
 

   

    return (
        <div className="sidebar">
            <div className="spend-time container ">
        <h1>Spent time on read:{readtime}min</h1>      
      </div>
      <div className="bookmark">
        <h1>Bookmarked Blogs:</h1>
        <div className=''>
        {bookmarks.map((bookmark) => (
            <div className='card mb-3' key={bookmark}>{bookmark}</div>
          ))}
            
        </div>
      </div>
        </div>
    );
};

export default Sidebar;