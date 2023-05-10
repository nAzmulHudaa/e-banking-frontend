import './App.css';
import Home from './components/Home/HomeMain.js';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Home/Login/Login.js';
import Sign from './components/Home/Sign/Sign.js';

function App() {
  return (

    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Sign />} />
      </Routes>
    </Router>

  );
}

export default App;
