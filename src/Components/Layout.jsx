import React from 'react';
import Header from './Header';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import Nav from './Nav';

const Layout = () => {
    return (
        <>
          <Nav></Nav>
          <Outlet></Outlet>
          <Footer></Footer>
        </>
    );
};

export default Layout;