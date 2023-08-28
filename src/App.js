import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import NavBar from './layout/navbar/Navbar';
import Footer from "./layout/footer/Footer"
import Home from './layout/Home';
import Index from './pages/rooms/Index';
import Events from './pages/events/Events';
import About from "./pages/about/About"
import Contact from './pages/contact/Contact';

AOS.init();


function App() {
  return (
    <>
      <Router>
        <NavBar/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/rooms' element={<Index />} />
          <Route path='/events' element={<Events />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
