import './App.css';
import About from './Pages/About';
import Home from './Pages/Home';
import { BrowserRouter, Link, Routes, Route } from 'react-router-dom';

function App() {
  return (

    <div className='App'>
      <div className='left-page'>
        
        <div className='title'>cats4lyf!</div>
        <div className='cat-container'>
        <CatCard/><CatCard/>
        </div>
        <div className='cat-container'>
        <CatCard/><CatCard/>
        </div>
        <div className='cat-container'>
        <CatCard/><CatCard/>
        </div>
      </div>
      <div className='right-page'>
        <div className='basket-title'>Basket</div>
        <div className='basket-item'>Cat1</div>
        <div className='basket-item'>Cat2</div>
        <div className='basket-item'>Cat3</div>
        <div className='basket-total'>Total: £(a prop probaly)</div>
        <br></br>
        <div className='checkout'>Buy Now!</div>
      </div>
    </div>

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
