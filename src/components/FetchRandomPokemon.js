import React, { useState, } from 'react';


const FetchPokemon = () => {

    const [pokemon, setPokemon] = useState();
    const [loading, setLoading] = useState();
    const [image , setImage] = useState();

    //determines how many generations to fetch
    //const gen1 = 150 + 1;
    //const gen2 = 251 + 1;
    //const gen3 = 386 + 1;
    const gen4 = 493 + 1;
    let newPokemon = Math.floor(Math.random() * gen4)

    const getPokemon = async () => {
        setLoading(true);
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${newPokemon}/`);
        const data = await response.json();
        setLoading(false);
        setPokemon(data.name);
        setImage(`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${newPokemon}.png`)
        console.log(data.name);
    }

    const showImage = () => {
        let sprite = document.getElementById('sprite');
        sprite.className = 'show'
    }


    return(
        <div className="container">
            <div className="header-footer">
                <h3>Random Pokemon Generator</h3>
                <h3>Gotta Draw 'em all</h3>
            </div>
            <div className="main">
                <div className="name">
                    {loading ? <h3 className="loader">Loading...</h3> : <h1>{pokemon}</h1>}
                <button type="button" onClick={getPokemon}><h4>New Pokemon</h4></button> 
                </div>
                <div>
                <div className="image-show">
                {loading ? <h3 className="loader">Loading...</h3> : <img alt="" id="sprite" className="hidden" src={image}></img>}
            </div>
                <button onClick={showImage} type="button">Show</button>
                </div>
            </div>
            <div className="header-footer">
                <h3>Generations 1 - 4</h3>
                <h3>Draw From Memory</h3>
            </div>
        </div>
    )}
    
export default FetchPokemon;