import React, { useEffect, useState, } from 'react';


const FetchPokemon = () => {

    const getNewPokemon = () => { 
        let newPokemon = Math.floor(Math.random() * 151 + 1)
        return(newPokemon);
    }
    const pokemonID = getNewPokemon();
    const [pokemon, setPokemon] = useState([]);
    //const [loading, setLoading] = useState(false);

    const getPokemon = async () => {
        //setLoading(true);
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonID}/`);
        const data = await response.json();
        setPokemon(data.name);
        //setLoading(false);
        console.log(data.name);
    }

    useEffect(() => {
        getPokemon();
      })

return(
    <div className="container">
        <div className="header-footer">
            <h3>Pokemon Name Generator</h3>
            <h3>Gotta Draw 'em all</h3>
        </div>
        <div className="main">
            <h1>{pokemon}</h1>
            <h3 className="instructions">re-load the page for a new pokemon</h3>
            <button type="button" onClick={getNewPokemon()}><h4>This button doesn't work yet</h4></button>
            
        </div>
        <div className="header-footer">
            <h3>151 pokemon</h3>
            <h3>work in progress...</h3>
        </div>
    </div>
    )}
    
export default FetchPokemon;