import React from 'react';
import socialIcons from '../assets/social-icons.png'
const Footer = () => {
    return (
        <footer className='bg-slate-600 w-full py-8'>
            <div className="my-container grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-12 text-center md:text-left">
                <div className='lg:col-span-2'>
                    <h2 className='text-white font-bold text-2xl'>JobVenture</h2>
                    <p className='my-4 footer-text'>There are many variations of passages of Lorem Ipsum , but the majority have suffered alteration in some form.</p>
                    <img src={socialIcons} alt="" className='mx-auto md:mx-0' />
                </div>
                <div>
                    <h3 className="footer-heading">Company</h3>
                    <ul className='footer-text'>
                        <li>About Us</li>
                        <li>Work</li>
                        <li>Latest News</li>
                        <li>Careers</li>
                    </ul>
                </div>
                <div>
                    <h3 className="footer-heading">Product</h3>
                    <ul className='footer-text'>
                        <li>Prototype</li>
                        <li>Plans & Pricing</li>
                        <li>Customers</li>
                        <li>Integrations</li>
                    </ul>
                </div>
                <div>
                    <h3 className="footer-heading">Support</h3>
                    <ul className='footer-text'>
                        <li>Help Desk</li>
                        <li>Sales</li>
                        <li>Become a Partner</li>
                        <li>Developers</li>
                    </ul>
                </div>
                <div>
                    <h3 className="footer-heading">Contact</h3>
                    <p className='footer-text'>524 Broadway , NYC</p>
                    <p className='footer-text'>+1 777 - 978 - 5570</p>
                </div>

            </div>
            <div className="my-container">
                <hr />
            </div>
            <div className="my-container md:flex justify-between items-center">
                <p className='footer-text mb-4'> &copy;2023 JobVenture. All Rights Reserved </p>
                <p className='footer-text'>Powered by <span className='font-bold text-slate-300'>JobVenture</span></p>
            </div>
        </footer>
    );
};

export default Footer;