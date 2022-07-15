import React from "react";
import { Button } from "./CatCardCss";
import Faker from "./Faker";
import './App.css';

const CatCard = ({addToBasket, cat, setCat}) => {

        return (<div className='cat-container' >
        <Button onClick={addToBasket}>
            <img ></img>
            <Faker />
        </Button>
        </div>);
        };



export default CatCard;

