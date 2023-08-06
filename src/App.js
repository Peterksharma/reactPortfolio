import React from 'react';

import Header from './components/Header'
import Footer from './components/Footer'
import AboutMe from './pages/AboutMe'
import Portfolio from './pages/Portfolio'
import Resume from './pages/Resume'
import Banner from './components/Banner'
// import Navigation from './components/Navigation';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Header />
      <Banner />
      {/* <Navigation /> */}
        <Routes>
          <Route path="/" exact Component={AboutMe} />
          <Route path="/portfolio" exact Component={Portfolio} />
          <Route path="/resume" exact Component={Resume} />
        </Routes>
        <Footer />
    </Router>
  )}

export default App;
