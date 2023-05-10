import './App.css';
import Home from './components/Home/HomeMain.js';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Home/Login/Login.js';
import Sign from './components/Home/Sign/Sign.js';
import ForgetPass from './components/Home/Login/ForgetPass.js';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Sign />} />
        <Route path="/forgetpass" element={<ForgetPass />} />
      </Routes>
    </Router>
  );
}

export default App;
