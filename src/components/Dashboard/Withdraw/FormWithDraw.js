import React, { useState, useEffect } from 'react';
import DashboardNav from '../DashboardNav/DashboardNav';
import Sidebar from '../DashboardNav/Sidebar';
import axios from 'axios';


const FormWithDraw = () => {
    const [transactionData, setTransactionData] = useState({
        senderName: '',
        senderEmail: '',
        senderAccountNumber: '',
        receiverName: '',
        receiverEmail: '',
        receiverAccountNumber: '',
        amount: '',
    });

    const handleAccountNumberChange = (e) => {
        setTransactionData({ ...transactionData, receiverAccountNumber: e.target.value });
    };

    const handleEmailChange = (e) => {
        setTransactionData({ ...transactionData, receiverEmail: e.target.value });
    };

    const handleAmountChange = (e) => {
        setTransactionData({ ...transactionData, amount: e.target.value });
    };
    const handleCurrencyChange = (e) => {
        setTransactionData({ ...transactionData, currency: e.target.value });
    };
    const handleNameChange = (e) => {
        setTransactionData({ ...transactionData, receiverName: e.target.value });
    };
    function showModal() {
        const modal = document.querySelector('.modal');
        modal.classList.remove('hidden');
    }
    function errModal() {
        const modal = document.querySelector('.modalerr');
        modal.classList.remove('hidden');
    }
    function errModalInsuffBal() {
        const modal = document.querySelector('.modalerrbal');
        modal.classList.remove('hidden');
    }

    function hideModal() {
        const modal = document.querySelector('.modal');
        modal.classList.add('hidden');
    }
    function hideErrModal() {
        const modal = document.querySelector('.modalerr');
        modal.classList.add('hidden');
    }
    function hideErrModalBal() {
        const modal = document.querySelector('.modalerrbal');
        modal.classList.add('hidden');
    }
    function handleSubmit(e) {
        e.preventDefault();
        const userData = JSON.parse(localStorage.getItem('userData'));
        const currentBalance = userData.currentBalance;
        const withdrawAmount = parseFloat(transactionData.amount);
      
        if (withdrawAmount > currentBalance) {
          errModalInsuffBal();
          return;
        }
      
        const config = {
          headers: {
            'Content-Type': 'application/json'
          }
        };
      
        const body = JSON.stringify({
          senderName: userData.name,
          senderEmail: userData.email,
          senderAccountNumber: userData.accountNumber,
          receiverName: transactionData.receiverName,
          receiverEmail: transactionData.receiverEmail,
          receiverAccountNumber: transactionData.receiverAccountNumber,
          amount: transactionData.amount
        });
      
        console.log('Sending request with body:', body);
      
        axios.post('http://localhost:5000/api/withdraw', body, config)
          .then(res => {
            console.log('Response:', res.data);
            showModal()
          })
          .catch(err => {
            console.error('Error:', err.response.data);
            errModal();
          });
      };
      




    return (
        <div>
            <div>
                <DashboardNav />
                <div class="flex overflow-hidden bg-white pt-16">
                    <Sidebar />
                    <div class="bg-gray-900 opacity-50 hidden fixed inset-0 z-10" id="sidebarBackdrop"></div>
                    <div id="main-content" class="h-full w-full bg-gray-50 relative overflow-y-auto lg:ml-64">
                        <main>
                            <div class="pt-6 px-4">
                                <form className="mx-auto max-w-lg" onSubmit={handleSubmit}>
                                    <h2 className="text-center text-2xl font-bold mt-8 mb-4">Withdraw Money Instantly</h2>
                                    <div className="mb-4">
                                        <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Name</label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            className="appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                            placeholder="Enter reciver name"
                                            required
                                            value={transactionData.receiverName}
                                            onChange={handleNameChange}
                                        />
                                    </div>
                                    <div className="mb-4">
                                        <label htmlFor="accountNumber" className="block font-medium text-gray-700 mb-2">
                                            Account Number
                                        </label>
                                        <input
                                            type="text"
                                            id="accountNumber"
                                            name="accountNumber"
                                            value={transactionData.receiverAccountNumber}
                                            onChange={handleAccountNumberChange}
                                            className="block w-full px-4 py-2 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 border-gray-300"
                                            required
                                            placeholder="Enter reciver A/C Number"

                                        />
                                    </div>
                                    <div className="mb-4">
                                        <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email</label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            className="block w-full px-4 py-2 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 border-gray-300"
                                            placeholder="Enter reciver email "
                                            required
                                            value={transactionData.receiverEmail}
                                            onChange={handleEmailChange}

                                        />
                                    </div>
                                    <div className="mb-4">
                                        <label htmlFor="amount" className="block font-medium text-gray-700 mb-2">
                                            Amount
                                        </label>
                                        <input
                                            type="number"
                                            id="amount"
                                            name="amount"
                                            value={transactionData.amount}
                                            onChange={handleAmountChange}
                                            className="block w-full px-4 py-2 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 border-gray-300"
                                            required
                                            placeholder="Enter  Amount"

                                        />
                                    </div>
                                    <div className="mb-4">
                                        <label htmlFor="currency" className="block font-medium text-gray-700 mb-2">
                                            Currency
                                        </label>
                                        <select
                                            id="currency"
                                            name="currency"
                                            value={transactionData.currency}
                                            onChange={handleCurrencyChange}

                                            className="block w-full px-4 py-2 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 border-gray-300"
                                            required
                                        >
                                            <option value="USD">BDT</option>
                                            <option value="EUR">USD</option>
                                            <option value="GBP">EUR</option>
                                        </select>
                                    </div>
                                    <div className="mt-8">
                                        <button type="submit" className="w-full py-3 px-4 text-white rounded-md bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                                            Withdraw
                                        </button>
                                    </div>
                                </form>
                                <div className="modal hidden fixed inset-0 z-50 overflow-auto bg-gray-500 bg-opacity-75 flex justify-center items-center">
                                    <div className="modal-content bg-white w-1/3 rounded-lg p-6 shadow-lg">
                                        <div className="flex flex-col items-center justify-center mb-6">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-16 h-16 text-green-500 mb-4">
                                                <path fillRule="evenodd" d="M10 19.6a9.6 9.6 0 110-19.2 9.6 9.6 0 010 19.2zm4.24-10.14a.75.75 0 00-1.06-1.06l-3.75 3.75-1.41-1.41a.75.75 0 00-1.06 1.06l1.91 1.91a.75.75 0 001.06 0l4.25-4.25z" clipRule="evenodd" />
                                            </svg>
                                            <p className="text-2xl font-bold">Withdrawal successful!</p>
                                        </div>
                                        <div class="flex justify-center">
                                            <button onClick={hideModal} className="py-2 px-4 text-white bg-green-500 hover:bg-green-600 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">OK</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="modalerr hidden fixed inset-0 z-50 overflow-auto bg-gray-500 bg-opacity-75 flex justify-center items-center">
                                    <div className="modal-content bg-white w-1/3 rounded-lg p-6 shadow-lg">
                                        <div className="flex flex-col items-center justify-center mb-6">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-16 h-16 text-red-500 mb-4">
                                                <path fillRule="evenodd" d="M10 0a10 10 0 110 20 10 10 0 010-20zm4.24 11.84a.75.75 0 01-1.06 1.06L10 11.06l-3.18 3.18a.75.75 0 11-1.06-1.06L8.94 10 5.76 6.82a.75.75 0 011.06-1.06L10 8.94l3.18-3.18a.75.75 0 011.06 1.06L11.06 10l3.18 3.18z" clipRule="evenodd" />
                                            </svg>
                                            <p className="text-2xl font-bold" id="modal-title">Withdraw Not Successful</p>
                                            <svg onClick={hideErrModal} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="absolute top-4 right-4 w-6 h-6 cursor-pointer">
                                                <path fillRule="evenodd" d="M11.414 10l4.293-4.293a1 1 0 00-1.414-1.414L10 8.586 5.707 4.293a1 1 0 00-1.414 1.414L8.586 10l-4.293 4.293a1 1 0 001.414 1.414L10 11.414l4.293 4.293a1 1 0 001.414-1.414L11.414 10z" clipRule="evenodd" />
                                            </svg>
                                        </div>
                                        <div class="flex justify-center">
                                            <button onClick={hideErrModal} className="py-2 px-4 text-white bg-green-500 hover:bg-green-600 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">OK</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="modalerrbal hidden fixed inset-0 z-50 overflow-auto bg-gray-500 bg-opacity-75 flex justify-center items-center">
                                    <div className="modal-content bg-white w-1/3 rounded-lg p-6 shadow-lg">
                                        <div className="flex flex-col items-center justify-center mb-6">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-16 h-16 text-red-500 mb-4">
                                                <path fillRule="evenodd" d="M10 0a10 10 0 110 20 10 10 0 010-20zm4.24 11.84a.75.75 0 01-1.06 1.06L10 11.06l-3.18 3.18a.75.75 0 11-1.06-1.06L8.94 10 5.76 6.82a.75.75 0 011.06-1.06L10 8.94l3.18-3.18a.75.75 0 011.06 1.06L11.06 10l3.18 3.18z" clipRule="evenodd" />
                                            </svg>
                                            <p className="text-2xl font-bold" id="modal-title">Insufficient Balance</p>
                                            <svg onClick={hideErrModalBal} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="absolute top-4 right-4 w-6 h-6 cursor-pointer">
                                                <path fillRule="evenodd" d="M11.414 10l4.293-4.293a1 1 0 00-1.414-1.414L10 8.586 5.707 4.293a1 1 0 00-1.414 1.414L8.586 10l-4.293 4.293a1 1 0 001.414 1.414L10 11.414l4.293 4.293a1 1 0 001.414-1.414L11.414 10z" clipRule="evenodd" />
                                            </svg>
                                        </div>
                                        <div class="flex justify-center">
                                            <button onClick={hideErrModalBal} className="py-2 px-4 text-white bg-green-500 hover:bg-green-600 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">OK</button>
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
    );
};

export default FormWithDraw;
