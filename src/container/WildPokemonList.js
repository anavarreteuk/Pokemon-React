import React from 'react'
import Card from '../component/Card'

const WildPokemonList = (props) => {
    
    return (
        <div>
            {props.pokemons.map(pokemon => 
            <Card key={pokemon.name} pokemon={pokemon} onClickPokemon={props.onClickPokemon} onDoubleClickCard={props.addToTeam}/>)}
        </div>
    )

}

export default WildPokemonList