import React, { useState } from 'react';
import Link from './Link';
import { Menu, X } from 'lucide-react';

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
    const [open, setOpen] = useState(false)

    const links = navigationData.map(route => <Link key={route.id} route={route}></Link>)

    return (
        <nav className='flex justify-between mx-8 mt-4'>

            <span className='flex' onClick={() => setOpen(!open)}>
                {
                    open ?
                        <X className='md:hidden'></X> :
                        <Menu className='md:hidden'></Menu>
                }
                <ul className={`md:hidden absolute duration-1000 
                    ${open ? 'top-10' : '-top-64'} 
                    bg-amber-200 text-black`}>
                    {links}
                </ul>
                <h3 className='ml-4'>My Navbar</h3>
            </span>
            <ul className='hidden md:flex'>
                {links}
            </ul>

            {/* <ul className='flex'>
                {navigationData.map(route => <li key={route.id}><a href={route.url}>{route.name}</a></li>)}
            </ul> */}

            {/* <ul className='flex'>
                <li className='mr-10'><a href="./Home">Home</a></li>
                <li className='mr-10'><a href="./About">About</a></li>
                <li className='mr-10'><a href="./Blog">Blog</a></li>
            </ul> */}

            <button>Button</button>

        </nav>
    );
};

export default NavBar;