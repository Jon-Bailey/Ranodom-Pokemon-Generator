import React, { useState, } from 'react';


const FetchPokemon = () => {

    const [pokemon, setPokemon] = useState();
    const [loading, setLoading] = useState();

    //determines how many generations to fetch
    //const gen1 = 150 + 1;
    //const gen2 = 251 + 1;
    //const gen3 = 386 + 1;
    const gen4 = 493 + 1;

    const getPokemon = async () => {
        setLoading(true);
        let newPokemon = Math.floor(Math.random() * gen4)
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${newPokemon}/`);
        const data = await response.json();
        setLoading(false);
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
            <div className="name">
                {loading ? <h3 className="loading">Loading...</h3> : <h1>{pokemon}</h1>}
            <button type="button" onClick={getPokemon}><h4>New Pokemon</h4></button> 
            </div>
            <div className="image">
                
            </div>
        </div>
        <div className="header-footer">
            <h3>Generations 1 - 4</h3>
            <h3>work in progress...</h3>
        </div>
    </div>
    )}
    
export default FetchPokemon;