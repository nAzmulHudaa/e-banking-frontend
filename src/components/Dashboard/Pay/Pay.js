import React from 'react';
import DashboardNav from '../DashboardNav/DashboardNav';
import Sidebar from '../DashboardNav/Sidebar';
import { Link } from 'react-router-dom';

const Pay = () => {
    return (
        <div>
            <div>
                <div>
                    <DashboardNav />
                    <div class="flex overflow-hidden bg-white pt-16">
                        <Sidebar />
                        <div class="bg-gray-900 opacity-50 hidden fixed inset-0 z-10" id="sidebarBackdrop"></div>
                        <div id="main-content" class="h-full w-full bg-gray-50 relative overflow-y-auto lg:ml-64">
                            <main>
                                <div class="pt-6 px-4">
                                    <div className='mt-4 w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4'>
                                        <div className="rounded-2xl bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-1 shadow-xl">
                                            <a className="block rounded-xl bg-white p-4 sm:p-6 lg:p-8" href="">
                                                <div className="mt-16">
                                                    <h2 className="text-lg font-bold text-gray-900 sm:text-xl">
                                                        Pay In Your Recipient Bank Account
                                                    </h2>
                                                    <Link to='/payform'>
                                                        <button className="mt-4 px-4 py-2 rounded-full bg-gradient-to-r from-yellow-500 to-red-500 text-white font-bold shadow-md transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
                                                            Pay Now!!!
                                                        </button>
                                                    </Link>
                                                </div>
                                            </a>
                                        </div>
                                        
                                    </div>
                                </div>
                            </main>
                            <p class="text-center text-sm text-gray-500 my-10">
                                &copy; 2019-2021 <a href="#" class="hover:underline" target="_blank">E-bank</a>. All rights reserved.
                            </p>
                        </div>
                    </div>
                    <script async defer src="https://buttons.github.io/buttons.js"></script>
                    <script src="https://demo.themesberg.com/windster/app.bundle.js"></script>
                </div>
            </div>
        </div>
    );
};

export default Pay;