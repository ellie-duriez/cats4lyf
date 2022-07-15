import React from 'react'
import Basket from '../CatCard';
import CatCard from '../CatCard';
import { useEffect, useState } from 'react';
import Faker from '../Faker';

function Home() {
    const [cat, setCat] = useState("");

    const getCat = async () => {

        let res = await fetch("https://api.thecatapi.com/v1/images/search?limit=20");

        let data = await res.json();

        let fakerData = Faker();

        let urlCopies = data.map((item) => { return item.url });
        

        fakerData = fakerData.map((cat, index) => {
            cat.img = urlCopies[index];
            cat.id = index;
            return cat;
        });


        // setCat(urlCopies);
        setCat(fakerData);
        
    };
    {console.log(cat[0])}
    useEffect(() => { getCat(); }, []);
    const [basket, setBasket] = useState([]);
    const addToBasket = () => {
        setBasket([...cat], { name: 0 })
    }

    return (
        <div className="heightOfPage">
            <div className='left-page'>
                {cat ? 
                <CatCard id={0} index={0} addToBasket={addToBasket} imgURL={cat[0].img} alt='cat' />
                :
                <p>loading</p>
                
            }
                <CatCard id={0} index={0} addToBasket={addToBasket} imgURL={cat[0].img} alt='cat' /><CatCard />
                <CatCard /><CatCard />
                <CatCard /><CatCard />
                
            </div>
            <div className='right-page'>
                <Basket value={basket} />
            </div>
        </div>
    )
}


export default Home

// onClick={addToBasket}