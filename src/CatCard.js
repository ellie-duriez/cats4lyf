import React from "react";
import { Button } from "./CatCardCss";
// import Faker from "./Faker";
import './App.css';

const CatCard = ({ addToBasket, cat, setCat, imgURL, img, index }) => {

    return (<div className='cat-container' >
        <Button onClick={()=>addToBasket(cat)}>
            <img index={index} src={imgURL}  alt="catImages"></img>
            <p>{`Name: ${cat.name}`}</p>
            <p>{`Age: ${cat.age}${cat.age===1?" year":" years"}`}</p>
            <p>{`Sex: ${cat.sex}`}</p>
            <p>{`Breed: ${cat.breed}`}</p>
            <p>{`Price: £${cat.price}`}</p>
        </Button>
    </div>);
};



export default CatCard;

