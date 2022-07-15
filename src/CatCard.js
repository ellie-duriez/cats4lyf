import React from "react";
import { Button } from "./CatCardCss";
// import Faker from "./Faker";
import './App.css';

const CatCard = ({ addToBasket, cat, setCat, imgURL, img, index }) => {

    return (<div className='cat-container' >
        <Button onClick={()=>addToBasket(cat)}>
            <img index={index} src={imgURL}  alt="catImages"></img>
            <div>{cat.age}</div>
            <div>{cat.breed}</div>
            <div>{cat.name}</div>
            <div>£{cat.price}</div>
                  
                  
           

            
        </Button>
    </div>);
};



export default CatCard;

