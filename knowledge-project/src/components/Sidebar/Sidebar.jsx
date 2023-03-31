import React from 'react';


const Sidebar = ({readtime,bookmarks}) => {
 

   

    return (
        <div className="sidebar card">
            <div className="spend-time border container ">
        <h1 className=''>Spent time on read:{readtime}min</h1>      
      </div>
      <div className="bookmark card">
        <h1>Bookmarked Blogs:{bookmarks.length}</h1>
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