import React, { useEffect } from "react";
import Header from "./components/Header";
import Hero from "./pages/Hero";
import Projects from './pages/Projects';
import AOS from "aos";
import "aos/dist/aos.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from './components/Footer';

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 200,
    });
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Hero />} />
          <Route path="/works" element={<Projects />}></Route>
        </Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
