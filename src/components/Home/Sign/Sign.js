import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from "react";
import { useNavigate } from 'react-router-dom';

const Sign = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const navigate = useNavigate();

   
    function showModal() {
        const modal = document.querySelector('.modal');
        modal.classList.remove('hidden');
    }

    function hideModal() {
        const modal = document.querySelector('.modal');
        modal.classList.add('hidden');
    }


    const handleSubmit = async (event) => {
        event.preventDefault();

        if (password !== confirmPassword) {
            setErrorMessage("Passwords do not match");
            return;
        }

        const name = `${firstName} ${lastName}`;
        const user = {
            name: name,
            email: email,
            password: password,
        };

        console.log(user);
        try {
            const response = await fetch("http://localhost:5000/user/signup", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(user),
            });
            const data = await response.json();
            console.log(data);
            showModal();
        } catch (error) {
            console.error(error);
        }
    };



    return (
        <div>
            <section class="bg-white">
                <div class="lg:grid lg:min-h-screen lg:grid-cols-12">
                    <section
                        class="relative flex h-32 items-center bg-gray-900 lg:col-span-5 lg:h-full xl:col-span-6"
                    >
                        <img
                            alt="Night"
                            src="https://images.unsplash.com/photo-1617195737496-bc30194e3a19?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                            class="absolute inset-0 h-full w-full object-cover opacity-80"
                        />

                        <div class="hidden lg:relative lg:block lg:p-12">
                            <a class="block text-white" href="/">
                                <span class="sr-only">Home</span>
                                <svg
                                    class="h-8 sm:h-10"
                                    viewBox="0 0 28 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M0.41 10.3847C1.14777 7.4194 2.85643 4.7861 5.2639 2.90424C7.6714 1.02234 10.6393 0 13.695 0C16.7507 0 19.7186 1.02234 22.1261 2.90424C24.5336 4.7861 26.2422 7.4194 26.98 10.3847H25.78C23.7557 10.3549 21.7729 10.9599 20.11 12.1147C20.014 12.1842 19.9138 12.2477 19.81 12.3047H19.67C19.5662 12.2477 19.466 12.1842 19.37 12.1147C17.6924 10.9866 15.7166 10.3841 13.695 10.3841C11.6734 10.3841 9.6976 10.9866 8.02 12.1147C7.924 12.1842 7.8238 12.2477 7.72 12.3047H7.58C7.4762 12.2477 7.376 12.1842 7.28 12.1147C5.6171 10.9599 3.6343 10.3549 1.61 10.3847H0.41ZM23.62 16.6547C24.236 16.175 24.9995 15.924 25.78 15.9447H27.39V12.7347H25.78C24.4052 12.7181 23.0619 13.146 21.95 13.9547C21.3243 14.416 20.5674 14.6649 19.79 14.6649C19.0126 14.6649 18.2557 14.416 17.63 13.9547C16.4899 13.1611 15.1341 12.7356 13.745 12.7356C12.3559 12.7356 11.0001 13.1611 9.86 13.9547C9.2343 14.416 8.4774 14.6649 7.7 14.6649C6.9226 14.6649 6.1657 14.416 5.54 13.9547C4.4144 13.1356 3.0518 12.7072 1.66 12.7347H0V15.9447H1.61C2.39051 15.924 3.154 16.175 3.77 16.6547C4.908 17.4489 6.2623 17.8747 7.65 17.8747C9.0377 17.8747 10.392 17.4489 11.53 16.6547C12.1468 16.1765 12.9097 15.9257 13.69 15.9447C14.4708 15.9223 15.2348 16.1735 15.85 16.6547C16.9901 17.4484 18.3459 17.8738 19.735 17.8738C21.1241 17.8738 22.4799 17.4484 23.62 16.6547ZM23.62 22.3947C24.236 21.915 24.9995 21.664 25.78 21.6847H27.39V18.4747H25.78C24.4052 18.4581 23.0619 18.886 21.95 19.6947C21.3243 20.156 20.5674 20.4049 19.79 20.4049C19.0126 20.4049 18.2557 20.156 17.63 19.6947C16.4899 18.9011 15.1341 18.4757 13.745 18.4757C12.3559 18.4757 11.0001 18.9011 9.86 19.6947C9.2343 20.156 8.4774 20.4049 7.7 20.4049C6.9226 20.4049 6.1657 20.156 5.54 19.6947C4.4144 18.8757 3.0518 18.4472 1.66 18.4747H0V21.6847H1.61C2.39051 21.664 3.154 21.915 3.77 22.3947C4.908 23.1889 6.2623 23.6147 7.65 23.6147C9.0377 23.6147 10.392 23.1889 11.53 22.3947C12.1468 21.9165 12.9097 21.6657 13.69 21.6847C14.4708 21.6623 15.2348 21.9135 15.85 22.3947C16.9901 23.1884 18.3459 23.6138 19.735 23.6138C21.1241 23.6138 22.4799 23.1884 23.62 22.3947Z"
                                        fill="currentColor"
                                    />
                                </svg>
                            </a>

                            <h2 class="mt-6 text-2xl font-bold text-white sm:text-3xl md:text-4xl">
                                Welcome To E-bank
                            </h2>

                            <p class="mt-4 leading-relaxed text-white/90">
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi nam
                                dolorum aliquam, quibusdam aperiam voluptatum.
                            </p>
                        </div>
                    </section>

                    <main
                        aria-label="Main"
                        class="flex items-center justify-center px-6 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6"
                    >
                        <div class="max-w-xl lg:max-w-3xl">
                            <div class="relative -mt-16 block lg:hidden">
                                <a
                                    class="inline-flex h-16 w-16 items-center justify-center rounded-full bg-white text-blue-600 sm:h-20 sm:w-20"
                                    href="/"
                                >
                                    <span class="sr-only">Home</span>
                                    <svg
                                        class="h-8 sm:h-10"
                                        viewBox="0 0 28 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M0.41 10.3847C1.14777 7.4194 2.85643 4.7861 5.2639 2.90424C7.6714 1.02234 10.6393 0 13.695 0C16.7507 0 19.7186 1.02234 22.1261 2.90424C24.5336 4.7861 26.2422 7.4194 26.98 10.3847H25.78C23.7557 10.3549 21.7729 10.9599 20.11 12.1147C20.014 12.1842 19.9138 12.2477 19.81 12.3047H19.67C19.5662 12.2477 19.466 12.1842 19.37 12.1147C17.6924 10.9866 15.7166 10.3841 13.695 10.3841C11.6734 10.3841 9.6976 10.9866 8.02 12.1147C7.924 12.1842 7.8238 12.2477 7.72 12.3047H7.58C7.4762 12.2477 7.376 12.1842 7.28 12.1147C5.6171 10.9599 3.6343 10.3549 1.61 10.3847H0.41ZM23.62 16.6547C24.236 16.175 24.9995 15.924 25.78 15.9447H27.39V12.7347H25.78C24.4052 12.7181 23.0619 13.146 21.95 13.9547C21.3243 14.416 20.5674 14.6649 19.79 14.6649C19.0126 14.6649 18.2557 14.416 17.63 13.9547C16.4899 13.1611 15.1341 12.7356 13.745 12.7356C12.3559 12.7356 11.0001 13.1611 9.86 13.9547C9.2343 14.416 8.4774 14.6649 7.7 14.6649C6.9226 14.6649 6.1657 14.416 5.54 13.9547C4.4144 13.1356 3.0518 12.7072 1.66 12.7347H0V15.9447H1.61C2.39051 15.924 3.154 16.175 3.77 16.6547C4.908 17.4489 6.2623 17.8747 7.65 17.8747C9.0377 17.8747 10.392 17.4489 11.53 16.6547C12.1468 16.1765 12.9097 15.9257 13.69 15.9447C14.4708 15.9223 15.2348 16.1735 15.85 16.6547C16.9901 17.4484 18.3459 17.8738 19.735 17.8738C21.1241 17.8738 22.4799 17.4484 23.62 16.6547ZM23.62 22.3947C24.236 21.915 24.9995 21.664 25.78 21.6847H27.39V18.4747H25.78C24.4052 18.4581 23.0619 18.886 21.95 19.6947C21.3243 20.156 20.5674 20.4049 19.79 20.4049C19.0126 20.4049 18.2557 20.156 17.63 19.6947C16.4899 18.9011 15.1341 18.4757 13.745 18.4757C12.3559 18.4757 11.0001 18.9011 9.86 19.6947C9.2343 20.156 8.4774 20.4049 7.7 20.4049C6.9226 20.4049 6.1657 20.156 5.54 19.6947C4.4144 18.8757 3.0518 18.4472 1.66 18.4747H0V21.6847H1.61C2.39051 21.664 3.154 21.915 3.77 22.3947C4.908 23.1889 6.2623 23.6147 7.65 23.6147C9.0377 23.6147 10.392 23.1889 11.53 22.3947C12.1468 21.9165 12.9097 21.6657 13.69 21.6847C14.4708 21.6623 15.2348 21.9135 15.85 22.3947C16.9901 23.1884 18.3459 23.6138 19.735 23.6138C21.1241 23.6138 22.4799 23.1884 23.62 22.3947Z"
                                            fill="currentColor"
                                        />
                                    </svg>
                                </a>

                                <h1
                                    class="mt-2 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl"
                                >
                                    Welcome to E-Banking Software
                                </h1>

                                <p class="mt-4 leading-relaxed text-gray-500">
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi
                                    nam dolorum aliquam, quibusdam aperiam voluptatum.
                                </p>
                            </div>

                            <form action="#" onSubmit={handleSubmit} className="mt-8 grid grid-cols-6 gap-6">
                                <div className="col-span-6 sm:col-span-3">
                                    <label htmlFor="FirstName" className="block text-sm font-medium text-gray-700">
                                        First Name
                                    </label>
                                    <input
                                        type="text"
                                        id="FirstName"
                                        name="first_name"
                                        className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm px-3 py-2"
                                        value={firstName}
                                        onChange={(event) => setFirstName(event.target.value)}
                                        required
                                    />
                                </div>

                                <div className="col-span-6 sm:col-span-3">
                                    <label htmlFor="LastName" className="block text-sm font-medium text-gray-700">
                                        Last Name
                                    </label>
                                    <input
                                        type="text"
                                        id="LastName"
                                        name="last_name"
                                        className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm px-3 py-2"
                                        value={lastName}
                                        onChange={(event) => setLastName(event.target.value)}
                                        required
                                    />
                                </div>

                                <div className="col-span-6">
                                    <label htmlFor="Email" className="block text-sm font-medium text-gray-700">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        id="Email"
                                        name="email"
                                        className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm px-3 py-2"
                                        value={email}
                                        onChange={(event) => setEmail(event.target.value)}
                                        required
                                    />
                                </div>

                                <div className="col-span-6 sm:col-span-3">
                                    <label htmlFor="Password" className="block text-sm font-medium text-gray-700">
                                        Password
                                    </label>
                                    <input
                                        type="password"
                                        id="Password"
                                        name="password"
                                        className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm px-3 py-2"
                                        value={password}
                                        onChange={(event) => setPassword(event.target.value)}
                                        required
                                    />
                                </div>

                                <div className="col-span-6 sm:col-span-3">
                                    <label htmlFor="ConfirmPassword" className="block text-sm font-medium text-gray-700">
                                        Confirm Password
                                    </label>
                                    <input
                                        type="password"
                                        id="ConfirmPassword"
                                        name="confirm_password"
                                        className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm px-3 py-2"
                                        value={confirmPassword}
                                        onChange={(event) => setConfirmPassword(event.target.value)}
                                    />
                                </div>

                                <div className="col-span-6">
                                    <p className="text-red-500">{errorMessage}</p>
                                </div>

                                <div className="col-span-6">
                                    <button
                                        type="submit"
                                        className="inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-gray-900 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                                    >
                                        Sign Up
                                    </button>
                                </div>
                            </form>
                          
                                <div className="modal hidden fixed inset-0 z-50 overflow-auto bg-gray-500 bg-opacity-75 flex justify-center items-center">
                                    <div className="modal-content bg-white w-1/3 rounded-lg p-6 shadow-lg">
                                        <div className="flex flex-col items-center justify-center mb-6">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-16 h-16 text-green-500 mb-4">
                                                <path fillRule="evenodd" d="M10 19.6a9.6 9.6 0 110-19.2 9.6 9.6 0 010 19.2zm4.24-10.14a.75.75 0 00-1.06-1.06l-3.75 3.75-1.41-1.41a.75.75 0 00-1.06 1.06l1.91 1.91a.75.75 0 001.06 0l4.25-4.25z" clipRule="evenodd" />
                                            </svg>
                                            <p className="text-2xl font-bold">Sign Up Successful!</p>
                                        </div>
                                        <div class="flex justify-center">
                                            <Link to ='/login'>
                                            <button  className="py-2 px-4 text-white bg-green-500 hover:bg-green-600 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">Login Now</button></Link>
                                        </div>
                                    </div>
                                </div>
                    
                            <p className="mt-2 text-center text-sm text-gray-600">
                                Already have an account?{" "}
                                <Link to="/login" className="font-medium text-gray-900 underline">
                                    Log in
                                </Link>
                            </p>
                        </div>
                    </main>
                </div>
            </section>
        </div>
    );
};

export default Sign;






