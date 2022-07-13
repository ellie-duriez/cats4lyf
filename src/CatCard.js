import {useState, useEffect} from 'react'
import { Button } from './CatCardCss';

const CatCard = () => {
    const [cat, setCat] = useState("");
    const getCat = async () => {
        let res = await fetch("https://api.thecatapi.com/v1/images/search");
        let data = await res.json(); setCat(data[0]);}
        useEffect(()=>{getCat()},[]);
        return (
        <>
<<<<<<< HEAD
        <img src={cat.url} alt='cat'></img>
        <Button>add to cart</Button>
=======
        <Button src={cat.url} alt='cat'>
            <img src={cat.url} alt='cat'></img>
        </Button>
>>>>>>> ab6c0a2d791a689a1044ce1b12472a53ce4e9d70
        </>)
                        }

export default CatCard;

// function App() {
//   const [cookie, setCookie] = useState('');
//   const getData = async () =>{
//     let res = await fetch('https://api.adviceslip.com/advice');
//     let data = await res.json();
//     setCookie(data.slip);
//   };
//   useEffect(()=>{getData()},[]);
//   return (
//     <div className="App">
//       <h1>Fortune Cookie</h1>
//       {cookie.advice ?
//       <h2>{cookie.advice}</h2>
//     :
//     <h2>no cookie</h2>}
//       <button onClick={getData}>open cookie</button>
//     </div>
//   );
// }