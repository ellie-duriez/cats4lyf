import './App.css';
import CatCard from './CatCard';

function App() {
  return (
<<<<<<< HEAD
    <div className='App'>
      <div className='left-page'>
        
        <div>cats4lyf!</div>
=======

    <div className='App'>
      <div className='left-page'>
        
        <div className='title'>cats4lyf!</div>
>>>>>>> ab6c0a2d791a689a1044ce1b12472a53ce4e9d70
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
<<<<<<< HEAD
    </div>
=======
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

>>>>>>> ab6c0a2d791a689a1044ce1b12472a53ce4e9d70
  );
}


export default App;
