import React from "react";
import { useState } from "react";

const Basket =({})=>{
    const [basket, setBasket] = useState([]);
    const addToBasket =()=>{

    }
    return(<form >
        <div value={basket} onChange={(e)=>setBasket(e.target.value)}>cat pic
        </div>
    </form>)
}

export default Basket;

// onSubmit={handleCheckout}