import React from 'react';

const Searchbar=({searchchange})=>{
    return (
        <div className="tc">
            <input className='pa3 b--green bg-lightest-blue'
            type='search'
            placeholder='Search Robot Here'
            onChange={searchchange}
            />
        </div>
    );
} 
export default Searchbar;