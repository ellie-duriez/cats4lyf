import React from 'react'
import Basket from '../CatCard';
import CatCard from '../CatCard';
import { useEffect, useState } from 'react';

function Home() {
    const [cat, setCat] = useState("");
    const getCat = async () => {
        let res = await fetch("https://api.thecatapi.com/v1/images/search?limit=20");
        let data = await res.json();
        let urlCopies = data.map((item, index) => { return item.url; });
        setCat(urlCopies);
    };
    useEffect(() => { getCat(); }, []);
    const [basket, setBasket] = useState([]);
    const addToBasket = () => {
        setBasket([...cat], { name: 0 })
    }

    return (
        <div className="heightOfPage">
            <div className='left-page'>
                <CatCard addToBasket={addToBasket} alt='cat' imgURL={cat[0]}/><CatCard imgURL={cat[1]} />
                <CatCard imgURL={cat[2]} /><CatCard imgURL={cat[3]} />
                <CatCard imgURL={cat[4]} /><CatCard imgURL={cat[5]} />
            </div>
            <div className='right-page'>
                <Basket value={basket} />
            </div>
        </div>
    )
}


export default Home

// onClick={addToBasket}