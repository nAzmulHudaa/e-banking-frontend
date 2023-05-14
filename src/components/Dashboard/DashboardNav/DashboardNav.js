import React, { useState, useEffect } from 'react';
import { HiBell } from 'react-icons/hi';
import { HiUserCircle } from 'react-icons/hi';
import { useNavigate } from 'react-router-dom';
import logo from "../../../images/E-Banking (White)-01.png";


const DashboardNav = () => {
    const [user, setUser] = useState([]);
    const [isNavOpen, setIsNavOpen] = useState(false);

    const handleNavToggle = () => {
        setIsNavOpen(!isNavOpen);
    };

    const navigate = useNavigate();

    useEffect(() => {
        setUser(JSON.parse(localStorage.getItem('userData')));
    }, []);

    function handleLogout() {
        fetch('http://localhost:5000/user/logout', {
            method: 'POST'
        })
            .then(response => {
                if (response.ok) {
                    setUser(null);
                    localStorage.removeItem('userData');
                    localStorage.removeItem('userData');
                    navigate('/login');
                } else {
                    console.log(response.statusText);
                }
            })
            .catch(error => {
                console.log(error);
            });
    }


    return (
        <nav className="bg-black border-b border-gray-200 fixed z-30 w-full">
            <div className="px-3 py-3 lg:px-5 lg:pl-3">
                <div className="flex items-center justify-between">
                    <div className="flex items-center justify-start">
                        <div class="flex items-center justify-start">
                            <button id="toggleSidebarMobile" aria-expanded="true" aria-controls="sidebar" class="lg:hidden mr-2 text-gray-600 hover:text-gray-900 cursor-pointer p-2  hover:bg-red-800 focus:bg-gray-100 focus:ring-2 focus:ring-gray-100 rounded">
                                <svg id="toggleSidebarMobileHamburger" class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path>
                                </svg>
                                <svg id="toggleSidebarMobileClose" class="w-6 h-6 hidden" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                                </svg>
                            </button>
                            <a href="#" class="text-xl font-bold flex items-center lg:ml-2.5">
                                <img src={logo} alt="" style = {{width:"150px"}}/>
                            </a>

                        </div>
                        <button
                            id="toggleSidebarMobile"
                            aria-expanded="true"
                            aria-controls="sidebar"
                            className="lg:hidden mr-2 text-gray-600 hover:text-gray-900 cursor-pointer p-2 hover:bg-red-800 focus:bg-gray-100 focus:ring-2 focus:ring-gray-100 rounded"
                        >
                        </button>
                    </div>
                    <div className="flex items-center">
                        <div className="hidden lg:flex items-center">
                            <span className="text-3xl font-normal text-orange-500 mr-5">
                                <HiBell />
                            </span>
                            <div className="relative">
                                <button
                                    className="text-3xl font-normal text-orange-500 focus:outline-none"
                                    onClick={handleNavToggle}
                                >
                                    <HiUserCircle />
                                </button>
                                {isNavOpen && (
                                    <div className="absolute top-14 right-0 w-64 bg-white border border-gray-300 rounded shadow-md z-20">
                                        <div className="px-4 py-2">
                                            <div className="px-4 p rounded-lg mb-4">
                                                <p className="text-gray-700 text-sm font-semibold">
                                                    {user && user.name}
                                                </p>
                                                <p className="text-gray-500 text-xs mt-1">
                                                    Account Number: {user && user.accountNumber}
                                                </p>
                                            </div>

                                            <button onClick={handleLogout}
                                                className="text-gray-700 text-sm font-semibold w-full text-left hover:bg-gray-100 py-2 px-4 ">
                                                Logout
                                            </button>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default DashboardNav;
