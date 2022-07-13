import './App.css';
import About from './Pages/About';
import Home from './Pages/Home';
import { BrowserRouter, Link, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <h1>cats4lyf!</h1>

        {/* link to the about page */}
        <Link to="/home">Home</Link>
        <Link to="/about">About Us</Link>

      </div >

      {/* adding routes for About page */}
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
