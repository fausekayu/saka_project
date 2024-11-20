import React from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import LoginPage from './LoginPage';
import Header from './components/header';
import Hero from './components/Hero';
import Gallery from './components/Gallery';
import About from './components/About';
import Testimonials from './components/Testimonials';

const LandingPage: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Gallery />
      <About />
      <Testimonials />
    </div>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/landing" element={<LandingPage />} />
      </Routes>
    </Router>
  );
};

export default App;
