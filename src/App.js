import React from 'react'
import { BrowserRouter, Link, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import About from './Pages/About';

function App() {
  return (
    <BrowserRouter>
      <div className='title'>Welcome to the cats4lyf Website</div>
      <div className='pageNavDIV'>
        {/* Links to Home and About page */}
        <ul className='pageNavUL'>
          <li>
            <Link to="/">Home</Link>
          </li>

          <li>
            <Link to="/about">About</Link>
          </li>

        </ul>
      </div>

      {/* Router setups for Home and About Page */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>


    </BrowserRouter>
  );
}


export default App;
