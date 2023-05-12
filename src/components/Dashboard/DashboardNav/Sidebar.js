import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (
        <div className='flex overflow-hidden bg-white pt-16'>
            <aside id="sidebar" class="fixed hidden z-20 h-full top-0 left-0 pt-16 flex lg:flex flex-shrink-0 flex-col w-64 transition-width duration-75" aria-label="Sidebar">
                <div class="relative flex-1 flex flex-col min-h-0 border-r border-gray-200 bg-white pt-0">
                    <div class="flex-1 flex flex-col overflow-y-auto">
                        <div class="flex-1 px-3 bg-gray-700 divide-y space-y-1">
                            <ul class="space-y-2 pb-2">
                                <li>
                                    <form action="#" method="GET" class="lg:hidden">
                                        <label for="mobile-search" class="sr-only">Search</label>
                                        <div class="relative">
                                            <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                                <svg class="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path>
                                                </svg>
                                            </div>
                                            <input type="text" name="email" id="mobile-search" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:ring-cyan-600 block w-full pl-10 p-2.5" placeholder="Search" />
                                        </div>
                                    </form>
                                </li>
                                <li>
                                    <Link to='/dashboard'>
                                        <a href="#" class="text-xl text-gray-100 font-normal rounded-lg flex items-center p-2 hover:bg-red-800 group">
                                            <svg class="w-6 h-6 text-gray-100 group-hover:text-gray-900 transition duration-75" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
                                                <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
                                            </svg>
                                            <span class="ml-3">Home</span>
                                        </a>
                                    </Link>
                                </li>
                                <li>
                                    <Link to='/getpaid'>
                                        <a href="#" target="_blank" class="text-xl text-gray-100 font-normal rounded-lg  hover:bg-red-800 flex items-center p-2 group ">
                                            <svg class="w-6 h-6 text-gray-100 flex-shrink-0 group-hover:text-gray-900 transition duration-75" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path>
                                            </svg>
                                            <span class="ml-3">Get Paid</span>

                                        </a>
                                    </Link>
                                </li>

                                <li>
                                    <Link to='/pay'>
                                        <a href="#" target="_blank" class="text-xl text-gray-100 font-normal rounded-lg  hover:bg-red-800 flex items-center p-2 group ">
                                            <svg class="w-6 h-6 text-gray-100 flex-shrink-0 group-hover:text-gray-900 transition duration-75" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M8.707 7.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l2-2a1 1 0 00-1.414-1.414L11 7.586V3a1 1 0 10-2 0v4.586l-.293-.293z"></path>
                                                <path d="M3 5a2 2 0 012-2h1a1 1 0 010 2H5v7h2l1 2h4l1-2h2V5h-1a1 1 0 110-2h1a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5z"></path>
                                            </svg>
                                            <span class="ml-3">Pay</span>

                                        </a>
                                    </Link>
                                </li>
                                <li>
                                    <Link to='/withdraw'>
                                        <a href="#" class="text-xl text-gray-100 font-normal rounded-lg  hover:bg-red-800 flex items-center p-2 group ">
                                            <svg class="w-6 h-6 text-gray-100 flex-shrink-0 group-hover:text-gray-900 transition duration-75" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path>
                                            </svg>
                                            <span class="ml-2">Withdraw & transfer</span>
                                        </a></Link>
                                </li>
                                <li>
                                    <Link to="/activity">
                                        <a href="#" class="text-xl text-gray-100 font-normal rounded-lg  hover:bg-blue-800 flex items-center p-2 group ">
                                            <svg class="w-6 h-6 text-gray-100 flex-shrink-0 group-hover:text-gray-900 transition duration-75" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                <path fill-rule="evenodd" d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z" clip-rule="evenodd"></path>
                                            </svg>
                                            <span class="ml-3  ">Account activity</span>
                                        </a>
                                    </Link>
                                </li>
                                <li>
                                    <a href="#" class="text-xl text-gray-100 font-normal rounded-lg  hover:bg-red-800 flex items-center p-2 group ">
                                        <svg class="w-6 h-6 text-gray-100 flex-shrink-0 group-hover:text-gray-900 transition duration-75" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z" clip-rule="evenodd"></path>
                                        </svg>
                                        <span class="ml-3  ">Banks and cards</span>
                                    </a>
                                </li>

                            </ul>
                            <div class="space-y-2 pt-2">
                                <a href="#" class="text-base text-gray-100 font-normal rounded-lg  hover:bg-red-800 group transition duration-75 flex items-center p-2">
                                    <svg class="w-5 h-5 text-gray-100 flex-shrink-0 group-hover:text-gray-900 transition duration-75" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="gem" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                        <path fill="currentColor" d="M378.7 32H133.3L256 182.7L378.7 32zM512 192l-107.4-141.3L289.6 192H512zM107.4 50.67L0 192h222.4L107.4 50.67zM244.3 474.9C247.3 478.2 251.6 480 256 480s8.653-1.828 11.67-5.062L510.6 224H1.365L244.3 474.9z"></path>
                                    </svg>
                                    <span class="ml-4">Privacy</span>
                                </a>
                                <a href="#" target="_blank" class="text-base text-gray-100 font-normal rounded-lg  hover:bg-red-800 group transition duration-75 flex items-center p-2">
                                    <svg class="w-6 h-6 text-gray-100 flex-shrink-0 group-hover:text-gray-900 transition duration-75" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"></path>
                                        <path fill-rule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clip-rule="evenodd"></path>
                                    </svg>
                                    <span class="ml-3">Legal</span>
                                </a>
                                <a href="#" target="_blank" class="text-base text-gray-100 font-normal rounded-lg  hover:bg-red-800 group transition duration-75 flex items-center p-2">
                                    <svg class="w-6 h-6 text-gray-100 flex-shrink-0 group-hover:text-gray-900 transition duration-75" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z"></path>
                                    </svg>
                                    <span class="ml-3">Fees</span>
                                </a>
                                <a href="#" target="_blank" class="text-sm text-gray-300 font-normal rounded-lg group transition duration-75 flex items-center p-2">

                                    <p>All right reserved by company</p>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </aside>
        </div>
    );
};

export default Sidebar;