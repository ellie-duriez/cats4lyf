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
        <Button>
        <img src={cat.url} alt='cat'></img>
        </Button>
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