import React from "react";
import { Button } from "./CatCardCss";
// import Faker from "./Faker";
import './App.css';

const CatCard = ({ addToBasket, cat, setCat, imgURL }) => {

    return (<div className='cat-container' >
        <Button onClick={addToBasket}>
            <img src={imgURL} alt="catImages"></img>
            {/* <Faker /> */}
        </Button>
    </div>);
};



export default CatCard;

