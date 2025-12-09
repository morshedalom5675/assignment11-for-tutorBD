import React from 'react';
import { Link } from 'react-router';
import { IoIosSchool } from 'react-icons/io';
import { FaFacebookF, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6"; // New X (Twitter) logo icon
import { MdEmail, MdPhone } from 'react-icons/md';

const Footer = () => {
    return (
        // Footer section with background color and padding
        <footer className="bg-base-200 border-t border-gray-300">
            <div className="container mx-auto max-w-7xl px-4 py-10 md:py-16">
                
                {/* Top Section: Links, Contact, About */}
                <div className="footer text-base-content grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-y-8">
                    
                    {/* 1. About Platform (Logo & Description) */}
                    <aside className="col-span-2 md:col-span-1 lg:col-span-2">
                        <Link to="/" className="text-2xl font-extrabold flex items-center gap-2 text-primary mb-2">
                            <IoIosSchool className="h-7 w-7" />
                            <span>eTuitionBd</span>
                        </Link>
                        <p className="text-sm text-gray-500 max-w-sm">
                            eTuitionBd is a complete platform where students, tutors, and admins can manage tuition activities including posting, applications, and financial tracking.
                        </p>
                    </aside>

                    {/* 2. Quick Links */}
                    <nav>
                        <h6 className="footer-title">Quick Links</h6>
                        <Link to="/" className="link link-hover">Home</Link>
                        <Link to="/" className="link link-hover">Browse Tuitions</Link>
                        <Link to="/" className="link link-hover">Find Tutors</Link>
                        <Link to="/" className="link link-hover">Dashboard</Link>
                    </nav>

                    {/* 3. About & Company */}
                    <nav>
                        <h6 className="footer-title">Company</h6>
                        <Link to="/" className="link link-hover">About Us</Link>
                        <Link to="/" className="link link-hover">Contact</Link>
                        <a className="link link-hover">Terms of Service</a>
                        <a className="link link-hover">Privacy Policy</a>
                    </nav>
                    
                    {/* 4. Contact Information */}
                    <nav className='col-span-2 md:col-span-1'>
                        <h6 className="footer-title">Contact</h6>
                        <div className='flex items-center gap-2 text-sm'>
                            <MdPhone className='text-primary h-4 w-4' /> 
                            <p>+880 1XXXXXXXXX</p>
                        </div>
                        <div className='flex items-center gap-2 text-sm'>
                            <MdEmail className='text-primary h-4 w-4' /> 
                            <p>support@etuitionbd.com</p>
                        </div>
                        <p className='text-sm mt-2 text-gray-500'>Dhaka, Bangladesh</p>
                    </nav>

                </div>

                {/* Divider */}
                <div className="divider my-6"></div>

                {/* Bottom Section: Social Media & Copyright */}
                <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-600">
                    
                    {/* Copyright Section */}
                    <p className="order-2 md:order-1 mt-4 md:mt-0">
                        Copyright © {new Date().getFullYear()} - All right reserved by eTuitionBd.
                    </p>

                    {/* Social Media Icons (New X Logo Used) */}
                    <div className="order-1 md:order-2 grid grid-flow-col gap-4">
                        <a className="text-2xl text-gray-600 hover:text-primary transition-colors" href='#' aria-label='Twitter/X'>
                           <FaXTwitter /> {/* New X Logo */}
                        </a>
                        <a className="text-2xl text-gray-600 hover:text-primary transition-colors" href='#' aria-label='Facebook'>
                            <FaFacebookF />
                        </a>
                        <a className="text-2xl text-gray-600 hover:text-primary transition-colors" href='#' aria-label='LinkedIn'>
                            <FaLinkedinIn />
                        </a>
                        <a className="text-2xl text-gray-600 hover:text-primary transition-colors" href='#' aria-label='Instagram'>
                            <FaInstagram />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;