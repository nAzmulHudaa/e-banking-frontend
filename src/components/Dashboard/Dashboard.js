import React from 'react'
import { useNavigate } from 'react-router-dom';
// import { HiOutlineCreditCard } from "react-icons/hi";
import DashboardNav from './DashboardNav/DashboardNav.js';
import Sidebar from './DashboardNav/Sidebar.js';
import Activity from './Activity/Activity.js';
import Card from './Card/Card.js';


export const Dashboard = () => {
   const navigate = useNavigate();



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
                        <Card />
                        <Activity />
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

   )
}
