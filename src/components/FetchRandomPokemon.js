import React, { useState, } from 'react';


const FetchPokemon = () => {

    const [pokemon, setPokemon] = useState();

    const getPokemon = async () => {
        let newPokemon = Math.floor(Math.random() * 151 + 1)
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${newPokemon}/`);
        const data = await response.json();
        setPokemon(data.name);
        console.log(data.name);
    }

return(
    <div className="container">
        <div className="header-footer">
            <h3>Pokemon Name Generator</h3>
            <h3>Gotta Draw 'em all</h3>
        </div>
        <div className="main">
            <h1>{pokemon}</h1>
            <button type="button" onClick={getPokemon}><h4>New Pokemon</h4></button>    
        </div>
        <div className="header-footer">
            <h3>151 pokemon</h3>
            <h3>work in progress...</h3>
        </div>
    </div>
    )}
    
export default FetchPokemon;