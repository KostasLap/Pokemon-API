import { useState } from 'react'

import './App.css'

function App() {
  const[pokemon,setPokemon] = useState("")

  const[pokemonObject,setPokemonObject]=useState(null);


  const handleSubmit = (e)=>{
    e.preventDefault();
  }
  
  const handleClick = () =>{
    if(pokemon===""){
      return 
    }

    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`,{
      method:'GET'
    })
      .then(response=>{
        if(!response.ok){
          throw new Error("Could not fetch data")
        }
        return response.json()
      })
      .then(data=>setPokemonObject(data))
      .catch(err=>console.error(err))
      
      
  
    
  
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>Pokemon Name</label>
        <input
        type='text'
        placeholder='Enter pokemon name...'
        value={pokemon}
        onChange={(e)=>setPokemon((e.target.value).toLowerCase())}
        />

        <button type='button' onClick={handleClick}>Submit</button>
      </form>

    
      {pokemonObject &&(
        <div>
          <h2>{pokemonObject.name}</h2>
          <img src={pokemonObject.sprites.front_default}/>
        </div>
      )}
    </>
  )
}

export default App
