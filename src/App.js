import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./layout/footer/Footer";
import Home from "./layout/Home";
import Details from "./component/blogs/Details"
import About from "./pages/About";
import Contact from "./pages/Contact";

import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/details/:id" element={<Details />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
