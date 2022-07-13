import React from 'react'
import CatCard from '../CatCard';

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
      </div>)}
  

export default App