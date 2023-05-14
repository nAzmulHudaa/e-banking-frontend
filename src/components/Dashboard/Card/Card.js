import React from "react";
import { HiOutlineCreditCard } from "react-icons/hi";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const Card = () => {


  const user = JSON.parse(localStorage.getItem('userData'));
  console.log(user)
  return (
    // <div className="mt-4 w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
    //   {user && user.map((data, index) => (
    //     <div
    //       key={index}
    //       className="bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8 "
    //       style={{ borderLeft: "5px solid orange" }}
    //     >
    //       <div className="flex items-center">
    //         <div>
    //           <p className="text-3xl mb-4 sm:text-2xl  text-green-500 leading-none font-bold ">
    //             {data.type}
    //           </p>
    //           <p className="text-2xl sm:text-2xl leading-none font-bold text-gray-900">
    //             {data.amount}
    //           </p>
    //           <div className="text-2xl flex gap-2">
    //             <span>
    //               <HiOutlineCreditCard />
    //             </span>{" "}
    //             <span>{data.cardNumber}</span>
    //           </div>
    //         </div>
    //         <div className="ml-5 mt-10 mr- w-0 flex items-center justify-end flex-1 text-green-500 text-base font-bold">
    //           <Link to='/withdraw'>
    //             Withdraw
    //             </Link>
    //             <svg
    //               className="w-5 h-5"
    //               fill="currentColor"
    //               viewBox="0 0 20 20"
    //               xmlns="http://www.w3.org/2000/svg"
    //             >
    //               <path
    //                 fillRule="evenodd"
    //                 d="M5.293 7.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L6.707 7.707a1 1 0 01-1.414 0z"
    //                 clipRule="evenodd"
    //               ></path>
    //             </svg>
    //         </div>
    //       </div>
    //     </div>
    //   ))}
    // </div>

    // <div className="mt-4 w-full  grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
    //   <div
    //     key={user._id}
    //     className="bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8 "
    //     style={{ borderLeft: "5px solid orange" }}
    //   >
    //     <div className="flex items-center">
    //       <div>
    //         <p className="text-3xl mb-4 sm:text-2xl  text-green-500 leading-none font-bold ">
    //           {/* access transaction type */}
    //           {/* {user.transactions[0].paymentType} */}
    //           Current Balance
    //         </p>
    //         <p className="text-2xl sm:text-2xl leading-none font-bold text-gray-900">
    //           {/* access transaction amount */}
    //           {/* {user.transactions[0].amount} */}
    //           {user.currentBalance}
    //         </p>
    //         <div className="text-2xl flex gap-2">
    //           <span>
    //             <HiOutlineCreditCard className='mt-2' />
    //           </span>{" "}
    //           <span>
    //             {/* access card number */}
    //             xxxxx-xxxxxxx
    //           </span>
    //         </div>
    //       </div>
    //       <div className="ml-5 mt-10 mr- w-0 flex items-center justify-end flex-1 text-green-500 text-base font-bold">
    //         <Link to="/withdraw">
    //           Withdraw
    //         </Link>
    //         <svg
    //           className="w-5 h-5"
    //           fill="currentColor"
    //           viewBox="0 0 20 20"
    //           xmlns="http://www.w3.org/2000/svg"
    //         >
    //           <path
    //             fillRule="evenodd"
    //             d="M5.293 7.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L6.707 7.707a1 1 0 01-1.414 0z"
    //             clipRule="evenodd"
    //           ></path>
    //         </svg>
    //       </div>
    //     </div>
    //     {/* second card */}




    //   </div>
    // </div>
    <div className="mt-4 w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
      <div
        key={user._id}
        className="bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8"
        style={{ borderLeft: "5px solid orange" }}
      >
        {/* content of first card */}
        <div className="flex items-center ">
          <div>
            <p className="text-3xl mb-4 sm:text-2xl  text-green-500 leading-none font-bold ">
              {/* access transaction type */}
              {/* {user.transactions[0].paymentType} */}
              Current Balance
            </p>
            <p className="text-2xl sm:text-2xl leading-none font-bold text-gray-900">
              {/* access transaction amount */}
              {/* {user.transactions[0].amount} */}
              {user.currentBalance}
            </p>
            <div className="text-2xl flex gap-2">
              <span>
                <HiOutlineCreditCard className='mt-2' />
              </span>{" "}
              <span>
                {/* access card number */}
                xxxxx-xxxxxxx
              </span>
            </div>
          </div>
          <div className="ml-5 mt-10 mr- w-0 flex items-center justify-end flex-1 text-green-500 text-base font-bold">
            <Link to="/withdraw">
              Withdraw
            </Link>
            <svg
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L6.707 7.707a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              ></path>
            </svg>
          </div>
        </div>
      </div>
      <div
        key={user._id}
        className="bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8"
        style={{ borderLeft: "5px solid orange" }}
      >
        <div className="flex items-center">
          <div>
            <p className="text-3xl mb-4 sm:text-2xl  text-green-500 leading-none font-bold ">
              {/* access transaction type */}
              {/* {user.transactions[0].paymentType} */}
              Deposit Balance
            </p>
            <p className="text-2xl sm:text-2xl leading-none font-bold text-gray-900">
              {/* access transaction amount */}
              {/* {user.transactions[0].amount} */}
              {user.depositBalance}
            </p>
            <div className="text-2xl flex gap-2">
              <span>
                <HiOutlineCreditCard className='mt-2' />
              </span>{" "}
              <span>
                {/* access card number */}
                xxxxx-xxxxxxx
              </span>
            </div>
          </div>
          <div className="ml-5 mt-10 mr- w-0 flex items-center justify-end flex-1 text-green-500 text-base font-bold">
            <Link to="/withdraw">
              Withdraw
            </Link>
            <svg
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L6.707 7.707a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              ></path>
            </svg>
          </div>
        </div>
      </div>
      <div
        key={user._id}
        className="bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8"
        style={{ borderLeft: "5px solid orange" }}
      >
        <div className="flex items-center">
          <div>
            <p className="text-3xl mb-4 sm:text-2xl  text-green-500 leading-none font-bold ">
              {/* access transaction type */}
              {/* {user.transactions[0].paymentType} */}
              Card Balance
            </p>
            <p className="text-2xl sm:text-2xl leading-none font-bold text-gray-900">
              {/* access transaction amount */}
              {/* {user.transactions[0].amount} */}
              {user.cardBalance}
            </p>
            <div className="text-2xl flex gap-2">
              <span>
                <HiOutlineCreditCard className='mt-2' />
              </span>{" "}
              <span>
                {/* access card number */}
                xxxxx-xxxxxxx
              </span>
            </div>
          </div>
          <div className="ml-5 mt-10 mr- w-0 flex items-center justify-end flex-1 text-green-500 text-base font-bold">
            <Link to="/withdraw">
              Withdraw
            </Link>
            <svg
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L6.707 7.707a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              ></path>
            </svg>
          </div>
        </div>
      </div>
    </div>

  );
};

export default Card;
