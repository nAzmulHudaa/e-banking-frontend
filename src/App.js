import './App.css';
import Home from './components/Home/HomeMain.js';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './components/Home/Login/Login.js';
import Sign from './components/Home/Sign/Sign.js';
import ForgetPass from './components/Home/Login/ForgetPass.js';
import { Dashboard } from './components/Dashboard/Dashboard.js';
import { useState } from 'react';
import Activity from './components/Dashboard/Activity/Activity';
import ActivityPage from './components/Dashboard/Activity/ActivityPage';
import Withdraw from './components/Dashboard/Withdraw/Withdraw';
import FormTransfer from './components/Dashboard/Withdraw/FormTransfer';
import FormWithDraw from './components/Dashboard/Withdraw/FormWithDraw.js';
import Pay from './components/Dashboard/Pay/Pay';
import PayNow from './components/Dashboard/Pay/PayNow';
import ReqPay from './components/Dashboard/ReqPay/ReqPay';
import PaymentRequestForm from './components/Dashboard/ReqPay/PaymentRequestForm';


function App() {
  // Set up a state variable to keep track of whether the user is authenticated
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // A function to handle authentication
  const handleAuthentication = () => {
    // Your authentication logic here
    setIsAuthenticated(true);
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login handleAuthentication={handleAuthentication} />} />
        <Route path="/register" element={<Sign />} />
        <Route path="/forgetpass" element={<ForgetPass />} />
        {/* Private route for the dashboard */}
        {/* <Route path="/dashboard" element={isAuthenticated ? <Dashboard /> : <Navigate to="/login" />} /> */}
        <Route path = "/dashboard" element = {<Dashboard/>} />
        <Route path = "/activity" element = {<ActivityPage/>} />
        <Route path = "/withdraw" element = {<Withdraw/>} />
        <Route path = "/transferfrom" element = {<FormTransfer/>} />
        <Route path = "/withdrawfrom" element = {<FormWithDraw/>} />
        <Route path = "/pay" element = {<Pay/>} />
        <Route path = "/payform" element = {<PayNow/>} />
        <Route path = "/getpaid" element = {<ReqPay/>} />
        <Route path = "/getpaidform" element = {<PaymentRequestForm/>} />

      </Routes>
    </Router>
  );
}

export default App;
