import React , {useState, useEffect} from 'react';
import './App.css';

import axios from 'axios';

import Character from './components/Character';


const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  const[data,setData] = useState([]);

  // Get the star wars characters.
  useEffect(() =>{
    axios.get(`http://swapi.dev/api/people/`)
    .then(({data}) =>{
      console.log(data)
      setData(data.results);
    })
    .catch(error => console.log(error))
  },[])    
    
  

  return (
    <div className="App">
      <h1 className="Header"> Star Wars Character Database</h1>
      <div className='character-container'>
        <h2>Characters</h2>
        {
          data.map(character =>{
            return (
              <Character characters={character}/>     

            );
          })

        }
      </div>     

    </div>
  );
}


 
export default App;
