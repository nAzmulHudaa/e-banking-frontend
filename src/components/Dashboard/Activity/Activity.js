import React from 'react';


const fakeData = [
    {
        name: "Jennifer Lee",
        email: "jennifer.lee@example.com",
        amount: "-$123.45",
        type: "Sent",
        accountNumber: "1234567890",
    },
    {
        name: "Mark Johnson",
        email: "mark.johnson@example.com",
        amount: "+$567.89",
        type: "Received",
        accountNumber: "0987654321",
    },
    {
        name: "Sarah Kim",
        email: "sarah.kim@example.com",
        amount: "+$890.12",
        type: "Received",
        accountNumber: "2468101214",
    },
    {
        name: "Alex Chen",
        email: "alex.chen@example.com",
        amount: "-$456.78",
        type: "Sent",
        accountNumber: "1357911131",
    },

];


const Activity = () => {
    return (
        <div>
            <div className="grid grid-cols-1 2xl:grid-cols-2 xl:gap-4 my-4">
                <div className="bg-white shadow rounded-lg mb-4 p-4 sm:p-6 h-full">
                    <div className="flex items-center justify-between mb-4">
                        <h3 className="text-xl font-bold leading-none text-gray-900">
                            Latest Transactions
                        </h3>
                        <a
                            href="#"
                            className="text-sm font-medium text-cyan-600  hover:bg-red-800 rounded-lg inline-flex items-center p-2"
                        >
                            View all
                        </a>
                    </div>
                    <div className="flow-root">
                        <ul role="list" className="divide-y divide-gray-200">
                            {fakeData.map((transaction, index) => (
                                <li key={index} className="py-3 sm:py-4">
                                    <div className="flex items-center space-x-4">
                                        <div className="flex-1 min-w-0">
                                            <p className="text-sm font-medium text-gray-900 truncate">
                                                {transaction.name}
                                            </p>
                                            <div className="text-sm">A/C : {transaction.accountNumber}</div>
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
                                                className={`inline-flex items-center text-base font-semibold ${transaction.type === "Sent" ? "text-red-500" : "text-green-500"
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
    );
};

export default Activity;
