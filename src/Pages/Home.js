import React from 'react'
import Basket from '../CatBasket';
import CatCard from '../CatCard';
import { useEffect, useState } from 'react';
import Faker from '../Faker';

function Home() {
    const [cat, setCat] = useState("");
    const [basket, setBasket] = useState([]);

    const getCat = async () => {

        let res = await fetch("https://api.thecatapi.com/v1/images/search?limit=20");

        let data = await res.json();

        let fakerData = Faker();

        let urlCopies = data.map((item) => { return item.url });
        

        fakerData = fakerData.map((cat, index) => {
            cat.image = urlCopies[index];
            cat.id = index;
            return cat;
        });

        // const handleSubmit = (e) => {e.preventDefault();
        //     setItems([...items,{toDo: toDoInput, done:false},]);
        //     setToDoInput('');};

        // setCat(urlCopies);
        setCat(fakerData);
        
    };
    
    useEffect(() => { getCat(); }, []);
    
    const addToBasket = (cat) => {
        let newArray = [...basket]
        newArray.push(cat)
        setBasket(newArray)
    }
    if (!cat){return <p>loading</p>};

    return (
        <div className="heightOfPage">
            <div className='left-page'>
                {/* {cat ? 
                <CatCard id={0} index={0} addToBasket={addToBasket} imgURL={cat[0].image} alt='cat' />
                :
                <p>loading</p>
                
            } */}
            {cat.map((item, index) => {
                return (
                <CatCard cat={item} imgURL={item.image} key={index} addToBasket={addToBasket}/>
      );
    })}
                
                
            </div>
            <div className='right-page'>
                <Basket basket={basket} setBasket={setBasket}/>
            </div>
        </div>
    )
}


export default Home

// onClick={addToBasket}