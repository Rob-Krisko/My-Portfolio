import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import styled from 'styled-components';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Header from './components/Header';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
  background-color: #282c34;
  min-height: 100vh;
`;

function App() {
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

  return (
    <Container>
      <Router>
        <Header />
        {!isMobile && <Navbar />}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </Container>
  );
}

export default App;
