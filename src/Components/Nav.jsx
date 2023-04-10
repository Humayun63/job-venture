import React, { useState } from 'react';
import { Bars3Icon, XCircleIcon } from '@heroicons/react/24/solid'
import { Link, NavLink, useLocation } from 'react-router-dom';

const Nav = () => {
    const [isOpen, setIsOpen] = useState(false)
    const { pathname } = useLocation();
    const isHome = pathname === '/';
    return (
        <div className={`${!isHome && 'nav-design'}`}>
            <nav className={`my-container h-16 px-4 relative lg:mt-4`}>
                <div className='flex items-center justify-between'>
                    <Link to='/'>
                        <span className='text-2xl font-bold'>JobVenture</span>
                    </Link>
                    <ul className='lg:flex gap-4 hidden'>
                        <li>
                            <NavLink to='/' className={({ isActive }) => (isActive ? 'active' : 'default')} onClick={() => setIsOpen(false)}>Home</NavLink>
                        </li>
                        <li>
                            <NavLink to='/statistics' className={({ isActive }) => (isActive ? 'active' : 'default')} onClick={() => setIsOpen(false)}>Statistics</NavLink>
                        </li>
                        <li>
                            <NavLink to='/applied-jobs' className={({ isActive }) => (isActive ? 'active' : 'default')} onClick={() => setIsOpen(false)}>Applied Jobs</NavLink>
                        </li>
                        <li>
                            <NavLink to='/blog' className={({ isActive }) => (isActive ? 'active' : 'default')} onClick={() => setIsOpen(false)}>Blog</NavLink>
                        </li>
                    </ul>
                    <div className='hidden lg:block'>
                        <button className='primary-btn'>Start Applying</button>
                    </div>

                    <Bars3Icon className={`h-14 w-14 lg:hidden cursor-pointer ${isOpen && 'hidden'}`} onClick={() => setIsOpen(true)} />
                </div>
                {/* Mobile Menu */}
                {
                    isOpen &&

                    <div className='absolute top-2 text-center w-11/12 bg-slate-100 rounded pb-4 pe-2 pt-2 z-10'>
                        <XCircleIcon className='h-10 w-10 ms-auto cursor-pointer' onClick={() => setIsOpen(false)} />
                        <Link to='/'>
                            <span className='text-2xl font-bold'>JobVenture</span>
                        </Link>
                        <ul className='my-4'>
                            <li className='mt-2' onClick={() => setIsOpen(false)}>
                                <NavLink to='/' className={({ isActive }) => (isActive ? 'active' : 'default')}>Home</NavLink>
                            </li>
                            <li className='mt-2' onClick={() => setIsOpen(false)}>
                                <NavLink to='/statistics' className={({ isActive }) => (isActive ? 'active' : 'default')}>Statistics</NavLink>
                            </li>
                            <li className='mt-2' onClick={() => setIsOpen(false)}>
                                <NavLink to='/applied-jobs' className={({ isActive }) => (isActive ? 'active' : 'default')}>Applied Jobs</NavLink>
                            </li>
                            <li className='mt-2' onClick={() => setIsOpen(false)}>
                                <NavLink to='/blog' className={({ isActive }) => (isActive ? 'active' : 'default')}>Blog</NavLink>
                            </li>
                        </ul>
                        <div>
                            <button className='primary-btn'>Start Applying</button>
                        </div>
                    </div>

                }
            </nav>
        </div>
    );
};

export default Nav;