import React from 'react';
import './FAQ.css';

const FAQ = () => {
    return (
        <div className='faqsection'>
            <h2 className='header'>FAQ <br /> (Frequently Asked Questions)</h2>
            <div className='faq-main'>
                <div class="space-y-4">
                    <details
                        class="group border-s-4 border-green-500 bg-gray-50 p-6 [&_summary::-webkit-details-marker]:hidden"
                        open
                    >
                        <summary class="flex cursor-pointer items-center justify-between gap-1.5">
                            <h2 class="text-lg font-medium text-gray-900">
                                How secure is my account information on your platform?
                            </h2>

                            <span class="shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    class="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-45"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path
                                        fill-rule="evenodd"
                                        d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                                        clip-rule="evenodd"
                                    />
                                </svg>
                            </span>
                        </summary>

                        <p class="mt-4 leading-relaxed text-gray-700">
                            We take the security of our users' accounts very seriously. Our platform uses state-of-the-art encryption and security protocols to protect your information and transactions.
                        </p>
                    </details>

                    <details
                        class="group border-s-4 border-green-500 bg-gray-50 p-6 [&_summary::-webkit-details-marker]:hidden"
                    >
                        <summary class="flex cursor-pointer items-center justify-between gap-1.5">
                            <h2 class="text-lg font-medium text-gray-900">
                                What types of accounts can I open with your platform?
                            </h2>

                            <span class="shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    class="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-45"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path
                                        fill-rule="evenodd"
                                        d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                                        clip-rule="evenodd"
                                    />
                                </svg>
                            </span>
                        </summary>

                        <p class="mt-4 leading-relaxed text-gray-700">
                            We offer a range of account options to meet your banking needs, including savings, checking, and investment accounts. Visit our account opening page to explore your options.
                        </p>
                    </details>

                    <details
                        class="group border-s-4 border-green-500 bg-gray-50 p-6 [&_summary::-webkit-details-marker]:hidden"
                    >
                        <summary class="flex cursor-pointer items-center justify-between gap-1.5">
                            <h2 class="text-lg font-medium text-gray-900">
                                How do I access my accounts on your platform?
                            </h2>

                            <span class="shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    class="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-45"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path
                                        fill-rule="evenodd"
                                        d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                                        clip-rule="evenodd"
                                    />
                                </svg>
                            </span>
                        </summary>

                        <p class="mt-4 leading-relaxed text-gray-700">
                            You can access your accounts on our platform through our website or mobile app. Simply log in using your account credentials to view your account balances, transaction history, and more.


                        </p>
                    </details>

                    <details
                        class="group border-s-4 border-green-500 bg-gray-50 p-6 [&_summary::-webkit-details-marker]:hidden"
                    >
                        <summary class="flex cursor-pointer items-center justify-between gap-1.5">
                            <h2 class="text-lg font-medium text-gray-900">
                                What if I have a question or need assistance with my account?
                            </h2>

                            <span class="shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    class="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-45"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path
                                        fill-rule="evenodd"
                                        d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                                        clip-rule="evenodd"
                                    />
                                </svg>
                            </span>
                        </summary>

                        <p class="mt-4 leading-relaxed text-gray-700">
                            We're here to help! Our customer support team is available 24/7 to answer your questions and provide assistance with your account. You can reach us via phone, email, or live chat on our website.


                        </p>
                    </details>
                </div>
            </div>
        </div>
    );
};

export default FAQ;