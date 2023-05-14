import { useState } from 'react';
import DashboardNav from '../DashboardNav/DashboardNav';
import Sidebar from '../DashboardNav/Sidebar';

function PaymentRequestForm() {
    const [payerName, setPayerName] = useState('');
    const [payerEmail, setPayerEmail] = useState('');
    const [paymentAmount, setPaymentAmount] = useState('');
    const [paymentDescription, setPaymentDescription] = useState('');
    const [dueDate, setDueDate] = useState('');
    function showModal() {
        const modal = document.querySelector('.modal');
        modal.classList.remove('hidden');
    }

    function hideModal() {
        const modal = document.querySelector('.modal');
        modal.classList.add('hidden');
    }
    function handleSubmit(e) {
        e.preventDefault();

        // Here you can process the payment request using the form data
        // For example, you can send the form data to a backend API to initiate the payment request
        console.log({ payerName, payerEmail, paymentAmount, paymentDescription, dueDate });
        showModal();
        // Clear form fields
        setPayerName('');
        setPayerEmail('');
        setPaymentAmount('');
        setPaymentDescription('');
        setDueDate('');
    }
   
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
                                <form className="w-full max-w-lg mx-auto" onSubmit={handleSubmit}>
                                    <div className="flex flex-wrap -mx-3 mb-6">
                                        <div className="w-full px-3">
                                            <label htmlFor="payer-name" className="block text-gray-700 font-bold mb-2">
                                                Payer Name
                                            </label>
                                            <input
                                                id="payer-name"
                                                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                                type="text"
                                                placeholder="Enter payer name"
                                                value={payerName}
                                                onChange={(e) => setPayerName(e.target.value)}
                                                required
                                            />
                                        </div>
                                    </div>
                                    <div className="flex flex-wrap -mx-3 mb-6">
                                        <div className="w-full px-3">
                                            <label htmlFor="payer-email" className="block text-gray-700 font-bold mb-2">
                                                Payer Email
                                            </label>
                                            <input
                                                id="payer-email"
                                                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                                type="email"
                                                placeholder="Enter payer email"
                                                value={payerEmail}
                                                onChange={(e) => setPayerEmail(e.target.value)}
                                                required
                                            />
                                        </div>
                                    </div>
                                    <div className="flex flex-wrap -mx-3 mb-6">
                                        <div className="w-full px-3">
                                            <label htmlFor="payment-amount" className="block text-gray-700 font-bold mb-2">
                                                Payment Amount
                                            </label>
                                            <div className="relative">
                                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                                    <span className="text-gray-500 sm:text-sm">$</span>
                                                </div>
                                                <input
                                                    id="payment-amount"
                                                    className="appearance-none border rounded-r rounded-l-none w-full py-2 pl-10 pr-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                                    type="number"
                                                    placeholder="Enter payment amount"
                                                    min="0"
                                                    step="0.01"
                                                    value={paymentAmount}
                                                    onChange={(e) => setPaymentAmount(e.target.value)}
                                                    required
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex flex-wrap -mx-3 mb-6">
                                        <div className="w-full px-3">
                                            <label htmlFor="payment-description" className="block text-gray-700 font-bold mb-2">
                                                Payment Description
                                            </label>
                                            <textarea
                                                id="payment-description"
                                                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                                placeholder="Enter payment description"
                                                value={paymentDescription}
                                                onChange={(e) => setPaymentDescription(e.target.value)}
                                                required
                                            />
                                        </div>
                                    </div>
                                    <div className="flex flex-wrap -mx-3 mb-6">
                                        <div className="w-full px-3">
                                            <label htmlFor="due-date" className="block text-gray-700 font-bold mb-2">
                                                Due Date
                                            </label>
                                            <input
                                                id="due-date"
                                                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                                type="date"
                                                placeholder="Select due date"
                                                value={dueDate}
                                                onChange={(e) => setDueDate(e.target.value)}
                                                required
                                            />
                                        </div>
                                    </div>
                                    <div className="flex justify-center">
                                        <button class="mt-4 px-4 py-2 rounded-full bg-gradient-to-r from-blue-400 to-blue-600 text-white font-bold shadow-md transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
                                            Request Payment
                                        </button>

                                    </div>
                                </form>
                                <div className="modal hidden fixed inset-0 z-50 overflow-auto bg-gray-500 bg-opacity-75 flex justify-center items-center">
                                    <div className="modal-content bg-white w-1/3 rounded-lg p-6 shadow-lg">
                                        <div className="flex flex-col items-center justify-center mb-6">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-16 h-16 text-green-500 mb-4">
                                                <path fillRule="evenodd" d="M10 19.6a9.6 9.6 0 110-19.2 9.6 9.6 0 010 19.2zm4.24-10.14a.75.75 0 00-1.06-1.06l-3.75 3.75-1.41-1.41a.75.75 0 00-1.06 1.06l1.91 1.91a.75.75 0 001.06 0l4.25-4.25z" clipRule="evenodd" />
                                            </svg>
                                            <p className="text-2xl font-bold">Payment Request successful!</p>
                                        </div>
                                        <div class="flex justify-center">
                                            <button onClick={hideModal} className="py-2 px-4 text-white bg-green-500 hover:bg-green-600 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">OK</button>
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
}

export default PaymentRequestForm;