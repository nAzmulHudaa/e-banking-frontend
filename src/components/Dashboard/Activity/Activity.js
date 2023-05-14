import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


const Activity = () => {
    const [transactions, setTransactions] = useState([]);
    const userData = JSON.parse(localStorage.getItem('userData'));
    const userEmail = userData.email;
    useEffect(() => {
        async function fetchTransactions() {
            const response = await fetch(`http://localhost:5000/latest/${userEmail}`);
            const data = await response.json();
            setTransactions(data);
        }
        fetchTransactions();
    }, [userEmail]);

    return (
        <div>
            <div className="grid grid-cols-1 2xl:grid-cols-2 xl:gap-4 my-4">
                <div className="bg-white shadow rounded-lg mb-4 p-4 sm:p-6 h-full">
                    <div className="flex items-center justify-between mb-4">
                        <h3 className="text-xl font-bold leading-none text-gray-900">
                            Latest Transactions
                        </h3>
                        <Link to ='/activity'>
                        <a
                            href="#"
                            className="text-sm font-medium text-cyan-600  hover:bg-red-800 rounded-lg inline-flex items-center p-2"
                        >
                            View all
                        </a>
                        </Link>
                    </div>
                    <div className="flow-root">
                        <ul role="list" className="divide-y divide-gray-200">
                            {transactions.map((transaction, index) => (
                                <li key={index} className="py-3 sm:py-4">
                                    <div className="flex items-center space-x-4">
                                        <div className="flex-1 min-w-0">
                                            <p className="text-sm font-medium text-gray-900 truncate">
                                                {transaction.name}
                                            </p>
                                            <div className="text-sm">A/C : {transaction.accountNo}</div>
                                            <p className="text-sm text-gray-500 truncate">
                                                <a
                                                    href={`mailto:${transaction.email}`}
                                                    className="__cf_email__"
                                                    data-cfemail="17722f272f3a161135292c23222f2f223b3d203f752e22"
                                                >
                                                    {transaction.email}
                                                </a>
                                            </p>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <div
                                                className={`inline-flex items-center text-base font-semibold ${transaction.paymentType === "send" ? "text-red-500" : "text-green-500"
                                                    }`}
                                            >
                                                {transaction.amount}
                                            </div>

                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Activity;
