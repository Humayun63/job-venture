import React from 'react';
import Header from './Header';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import Nav from './Nav';

const Layout = () => {
  return (
    <>
      <Nav></Nav>
      <div className='min-h-[calc(100vh-419px)]'>
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </>
  );
};

export default Layout;