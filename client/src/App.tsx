import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Service from "./components/Service";
import FoodMenu from "./components/FoodMenu";
import Contact from "./components/Contact";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/menu" element={<FoodMenu />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
