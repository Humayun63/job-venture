import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Nav = () => {
    return (
        <nav>
            <h1>JobVenture</h1>
            
            <div>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/statistics'>Statistics</NavLink>
                <NavLink to='/applied-jobs'>Applied Jobs</NavLink>
                <NavLink to='/blog'>Blog</NavLink>
            </div>

            <button>Start Applying</button>
        </nav>
    );
};

export default Nav;