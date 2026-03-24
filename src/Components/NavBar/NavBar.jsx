import React from 'react';
import Link from './Link';

const navigationData = [
  {
    id: 1,
    name: "Home",
    url: "/"
  },
  {
    id: 2,
    name: "About",
    url: "/about"
  },
  {
    id: 3,
    name: "Services",
    url: "/services"
  },
  {
    id: 4,
    name: "Blog",
    url: "/blog"
  },
  {
    id: 5,
    name: "Contact",
    url: "/contact"
  }
];

const NavBar = () => {
    return (
        <nav>

            <ul className='flex'>
                {navigationData.map(route => <Link key={route.id} route={route}></Link>)}
            </ul>

            {/* <ul className='flex'>
                {navigationData.map(route => <li key={route.id}><a href={route.url}>{route.name}</a></li>)}
            </ul> */}

            {/* <ul className='flex'>
                <li className='mr-10'><a href="./Home">Home</a></li>
                <li className='mr-10'><a href="./About">About</a></li>
                <li className='mr-10'><a href="./Blog">Blog</a></li>
            </ul> */}
            
        </nav>
    );
};

export default NavBar;