import React from 'react'
import { Button } from './CatCardCss';

const Basket =({basket, setBasket})=>{
    const removeFromBasket = (index)=>{
        let storedCats = [...basket];
        storedCats.splice(index,1);
        setBasket(storedCats);
    }

    return(<>
    {basket.map((basketItem, index)=>{
        return(
            <div>
                <img src={basketItem.image} alt='basketcat'/>
                <button onClick={()=>removeFromBasket(index)} >Delete</button>
            </div>
        )
    })}
    </>)
}

export default Basket;
