import React from 'react';

const Link = ({route}) => {
    return (
        <li className='px-4 md:mr-10 hover:bg-amber-400'>
           <a href={route.url}>{route.name}</a> 
        </li>
    );
};

export default Link;