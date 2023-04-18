import './App.css';
// import React, { Component } from 'react'
import React, { useState } from 'react'
import Home from './components/Home';
import Test from './components/Test';
import Other from './components/other';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import LoadingBar from 'react-top-loading-bar'

const App = () => {
  // const pageSize = 5;
  // const apiKey = process.env.REACT_APP_NEWS_API

  // const [progress, setProgress] = useState(0);

  return (
    <>
      <div>
        <Router>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/test" element={<Test />} /> 
            <Route exact path="/other" element={<Other />} /> 
          </Routes>
        </Router>
      </div>
    </>
  )
}

export default App;
