"use client";

import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faCalendarAlt, faPills, faUserCircle} from '@fortawesome/free-solid-svg-icons';


const Navbar: React.FC = () => {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
    const toggleMobileMenu = () => {
        setMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <div className={`bg-gray-800 text-white p-4 relative `}>
            <div className={`text-2xl font-bold mb-4 font-serif tracking-widest`}>Verdure</div>

            <div className="md:hidden">
                <button onClick={toggleMobileMenu}>
                    <svg
                        className="h-6 w-6 text-red-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 6h16M4 12h16m-7 6h7"
                        />
                    </svg>
                </button>
            </div>


            <nav className="hidden md:block">
                <ul>
                <div className="flex">
                            <FontAwesomeIcon icon={faHome} className="navbar-icon" />
                            <li className="navbar-text"><a href="#">Home</a></li>
                        </div>

                        <div className="flex">
                            <FontAwesomeIcon icon={faCalendarAlt} className="navbar-icon" />
                            <li className="navbar-text"><a href="#">Appointments</a></li>
                        </div>

                        <div className="flex">
                            <FontAwesomeIcon icon={faPills} className="navbar-icon" />
                            <li className="navbar-text"><a href="#">Prescribed Treatments</a></li>
                        </div>

                        <div className="flex">
                            <FontAwesomeIcon icon={faUserCircle} className="navbar-icon" />
                            <li className="navbar-text"><a href="#">Profile</a></li>
                        </div>
                </ul>
            </nav>

            {isMobileMenuOpen && (
                <div className="md:hidden">
                    <ul>
                        <div className="flex">
                            <FontAwesomeIcon icon={faHome} className="navbar-icon" />
                            <li className="navbar-text"><a href="#">Home</a></li>
                        </div>


                        <div className="flex">
                            <FontAwesomeIcon icon={faCalendarAlt} className="navbar-icon" />
                            <li className="navbar-text"><a href="#">Appointments</a></li>
                        </div>


                        <div className="flex">
                            <FontAwesomeIcon icon={faPills} className="navbar-icon" />
                            <li className="navbar-text"><a href="#">Prescribed Treatments</a></li>
                        </div>

                        <div className="flex">
                            <FontAwesomeIcon icon={faUserCircle} className="navbar-icon" />
                            <li className="navbar-text"><a href="#">Profile</a></li>
                        </div>

                    </ul>
                </div>
            )}

            <div className={`absolute bottom-4 left-4`}>
                <hr className="border-t border-gray-600 my-2" />

                <div className="flex items-center">
                    <img src="https://placekitten.com/40/40" alt="User" className="rounded-full h-8 w-8 mr-2" />
                    <div>
                        <div className="text-sm font-semibold">John Doe</div>
                        <div className="text-xs text-gray-500">john.doe@gmail.com</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
