import React from 'react';
import socialIcons from '../assets/social-icons.png'
const Footer = () => {
    return (
        <footer className='bg-slate-600 w-full'>
            <div className="my-container grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6">
                <div className='lg:col-span-2'>
                    <h2>JobVenture</h2>
                    <p>There are many variations of passages of Lorem Ipsum , but the majority have suffered alteration in some form.</p>
                    <img src={socialIcons} alt="" />
                </div>
                <div>
                    <h3>Company</h3>
                    <ul>
                        <li>About Us</li>
                        <li>Work</li>
                        <li>Latest News</li>
                        <li>Careers</li>
                    </ul>
                </div>
                <div>
                    <h3>Product</h3>
                    <ul>
                        <li>Prototype</li>
                        <li>Plans & Pricing</li>
                        <li>Customers</li>
                        <li>Integrations</li>
                    </ul>
                </div>
                <div>
                    <h3>Support</h3>
                    <ul>
                        <li>Help Desk</li>
                        <li>Sales</li>
                        <li>Become a Partner</li>
                        <li>Developers</li>
                    </ul>
                </div>
                <div>
                    <h3>Contact</h3>
                    <p>524 Broadway , NYC</p>
                    <p>+1 777 - 978 - 5570</p>
                </div>
            </div>
            <div className="my-container">
                <p> &copy;2023 JobVenture. All Rights Reserved </p>
                <p>Powered by <span>JobVenture</span></p>
            </div>
        </footer>
    );
};

export default Footer;