import React from 'react';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="spend-time container ">
        <h1>Spent time on read:{}min</h1>      
      </div>
      <div className="bookmark">
        <h1>Bookmarked Blogs:{}</h1>
        <div className='card'>

            
        </div>
      </div>
        </div>
    );
};

export default Sidebar;