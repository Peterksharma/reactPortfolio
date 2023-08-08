import React from 'react';

import Header from './components/Header'
import Footer from './components/Footer'
import Banner from './components/Banner'
import Splash from './components/Splash'
import Project from './components/Project'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
      <Header />
        <Banner />
        <Routes>
          <Route exact path="/" element={<Splash />} />
          <Route path="/project" element={<Project/>} />
        </Routes>
      <Footer />
        </div>
    </Router>
  )
}

export default App