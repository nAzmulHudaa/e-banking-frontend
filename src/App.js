import './App.css';
import Clients from './components/Home/Clients/Clients';
import Feature from './components/Home/Features/Features';
import HeroSection from './components/Home/HeroSection/HeroSection';
import Navbar from './components/Home/Navbar/Navbar';
import Testimonial from './components/Home/Testimonial/Testimonial';
import Work from './components/Home/Work/Work';
import Workflow from './components/Home/Workflow/Workflow';
import Login from './components/Home/Login/Login';
import Footer from './components/Home/Footer/Footer';
import FAQ from './components/Home/FAQ/FAQ';
import Sign from './components/Home/Sign/Sign.js';
import { Dashboard } from './components/Dashboard/Dashboard';


function App() {
  return (
    <div className='App'>
      {/* <Navbar />
      <HeroSection />
      <Clients />
      <Feature />
      <Workflow />
      <Work />
      <FAQ />
      <Testimonial /> */}
      <Dashboard />
      <Footer />
      {/* <Sign /> */}
    </div>
  );
}

export default App;
