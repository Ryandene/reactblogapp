import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Home from './components/widgets/Home';
import About from './components/widgets/About';
import Contact from './components/widgets/Contact';


import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />


      </Routes>
    </Router>
  );
};

export default App;