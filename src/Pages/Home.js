import React from 'react'
import Basket from '../CatCard';
import CatCard from '../CatCard';

function Home() {

    return (
        <div className="heightOfPage">
            <div className='left-page'>
                <div className='cat-container'>
                    <CatCard /><CatCard />
                </div>
                <div className='cat-container'>
                    <CatCard /><CatCard />
                </div>
                <div className='cat-container'>
                    <CatCard /><CatCard />
                </div>
            </div>
            <div className='right-page'>
                <Basket />
            </div>
        </div>
    )
}


export default Home

// onClick={addToBasket}