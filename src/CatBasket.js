import React from 'react'
import { Button } from './CatCardCss';

const Basket =({basket, setBasket})=>{
    const removeFromBasket = (index)=>{
        let storedCats = [...basket];
        storedCats.splice(index,1);
        setBasket(storedCats);
    }
        
    let total = 0

    return(<>
    {basket.map((basketItem, index)=>{
        total+= parseInt(basketItem.price)
        return(
            <div>
            <div>
                <img src={basketItem.image} alt='basketcat'/>
                <div>{basketItem.name}</div>
                <div>£{basketItem.price}</div>
                <button onClick={()=>removeFromBasket(index)} >Delete</button>
                </div>
                

            </div>
        )
    })}<div>Total: £{total}
    </div>
    </>)
}

export default Basket;
