import React from 'react';
import DashboardNav from '../DashboardNav/DashboardNav';
import Sidebar from '../DashboardNav/Sidebar';

const PayNow = () => {
    const handleSubmit = (event) => {
        event.preventDefault();
        showModal();

        // Handle form submission here
    };
    function showModal() {
        const modal = document.querySelector('.modal');
        modal.classList.remove('hidden');
    }

    function hideModal() {
        const modal = document.querySelector('.modal');
        modal.classList.add('hidden');
    }
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
                                    <div className="mx-auto max-w-md">
                                        <h2 className="text-3xl font-bold text-center mb-8">Pay Your Receipent Instantly</h2>
                                        <form onSubmit={handleSubmit}>
                                            <div className="mb-4">
                                                <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Name</label>
                                                <input
                                                    type="text"
                                                    id="name"
                                                    name="name"
                                                    className="appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                                    placeholder="Enter your name"
                                                    required
                                                />
                                            </div>
                                            <div className="mb-4">
                                                <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email</label>
                                                <input
                                                    type="email"
                                                    id="email"
                                                    name="email"
                                                    className="appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                                    placeholder="Enter your email"
                                                    required
                                                />
                                            </div>
                                            <div className="mb-4">
                                                <label htmlFor="accNumber" className="block text-gray-700 font-bold mb-2">Account Number</label>
                                                <input
                                                    type="text"
                                                    id="accNumber"
                                                    name="accNumber"
                                                    className="appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                                    placeholder="Enter account number"
                                                    required
                                                />
                                            </div>
                                            <div className="mb-4">
                                                <label htmlFor="currency" className="block text-gray-700 font-bold mb-2">Currency</label>
                                                <select
                                                    id="currency"
                                                    name="currency"
                                                    className="appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                                    required
                                                >
                                                    <option value="" disabled selected>Select currency</option>
                                                    <option value="USD">BDT</option>
                                                    <option value="EUR">USD</option>
                                                    <option value="GBP">EUR</option>
                                                </select>
                                            </div>
                                            <div className="mb-4">
                                                <label htmlFor="amount" className="block font-medium text-gray-700 mb-2">
                                                    Amount
                                                </label>
                                                <input
                                                    type="number"
                                                    id="amount"
                                                    name="amount"
                                                    // value={amount}
                                                    // onChange={handleAmountChange}
                                                    className="block w-full px-4 py-2 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 border-gray-300"
                                                    required
                                                />
                                            </div>
                                            <div className="mt-8">
                                                <button type="submit" className="w-full py-3 px-4 text-white rounded-md bg-gradient-to-r from-blue-400 to-blue-600 hover:from-blue-500 hover:to-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                                                    Pay Now
                                                </button>
                                            </div>

                                        </form>
                                        <div className="modal hidden fixed inset-0 z-50 overflow-auto bg-gray-500 bg-opacity-75 flex justify-center items-center">
                                            <div className="modal-content bg-white w-1/3 rounded-lg p-6 shadow-lg">
                                                <div className="flex flex-col items-center justify-center mb-6">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-16 h-16 text-green-500 mb-4">
                                                        <path fillRule="evenodd" d="M10 19.6a9.6 9.6 0 110-19.2 9.6 9.6 0 010 19.2zm4.24-10.14a.75.75 0 00-1.06-1.06l-3.75 3.75-1.41-1.41a.75.75 0 00-1.06 1.06l1.91 1.91a.75.75 0 001.06 0l4.25-4.25z" clipRule="evenodd" />
                                                    </svg>
                                                    <p className="text-2xl font-bold">Payment successful!</p>
                                                </div>
                                                <div class="flex justify-center">
                                                    <button onClick={hideModal} className="py-2 px-4 text-white bg-green-500 hover:bg-green-600 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">OK</button>
                                                </div>
                                            </div>
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

export default PayNow;