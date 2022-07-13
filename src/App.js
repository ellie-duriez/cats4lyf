import './App.css';
import CatCard from './CatCard';

function App() {
  return (
    <div className='App'>
      <div className='left-page'>
        
        <div className='title'>cats4lyf!</div>
        <div className='cat-container'>
        <CatCard/><CatCard/>
        </div>
        <div className='cat-container'>
        <CatCard/><CatCard/>
        </div>
        <div className='cat-container'>
        <CatCard/><CatCard/>
        </div>
      </div>
    </div>
  );
}


export default App;
