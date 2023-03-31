import React from 'react';

const Sidebar = ({readtime,}) => {
 

   

    return (
        <div className="sidebar">
            <div className="spend-time container ">
        <h1>Spent time on read:{readtime}min</h1>      
      </div>
      <div className="bookmark">
        <h1>Bookmarked Blogs:</h1>
        <div className='card'>

            
        </div>
      </div>
        </div>
    );
};

export default Sidebar;