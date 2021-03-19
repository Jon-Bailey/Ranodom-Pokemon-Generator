import React, { useEffect, useState, } from 'react';


const FetchPokemon = () => {

    const getNewPokemon = () => { 
        let newPokemon = Math.floor(Math.random() * 150 + 1)
        return(newPokemon);
    }
    const pokemonID = getNewPokemon();
    const [pokemon, setPokemon] = useState([]);
    const [loading, setLoading] = useState(false);

    const getPokemon = async () => {
        //setLoading(true);
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonID}/`);
        const data = await response.json();
        setPokemon(data.name);
        setLoading(false);
        console.log(data.name);
    }

    useEffect(() => {
        getPokemon();
      })

return(
    <div>
        <h1>{pokemon}</h1>
        <button type="button" onClick={getNewPokemon()}><h2>New Pokemon</h2></button>
    </div>
    )}
    
export default FetchPokemon;