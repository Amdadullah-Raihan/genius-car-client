import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.svg'

const Header = () => {
    return (
        <div className="navbar bg-base-100 lg:px-10">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li className='active'><Link>Home</Link></li>
                        <li><Link>Services</Link></li>
                        <li><Link>Blog</Link></li>
                        <li><Link>About</Link></li>
                        <li><Link>Contact</Link></li>
                    </ul>
                </div>
                <Link className="btn btn-ghost normal-case text-xl"><img className='w-18 ' src={logo} alt="" /></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li className='active'><Link>Home</Link></li>
                    <li><Link>Services</Link></li>
                    <li><Link>Blog</Link></li>
                    <li><Link>About</Link></li>
                    <li><Link>Contact</Link></li>
                </ul>
            </div>
            <div className="navbar-end">
                <Link className="px-2 "><i class="fa-regular fa-bag-shopping"></i></Link>
                <Link className="px-2 "><i class="fa-light fa-magnifying-glass"></i></Link>
                <Link className="border px-4 py-2">Appointment</Link>
                
            </div>
        </div>
    );
};

export default Header;