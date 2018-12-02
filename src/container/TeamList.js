import React from 'react'
import Card from '../component/Card'

const TeamList = (props) => {
    return (
        <div>
            <h3>TeamList:</h3>
            
             {props.pokemons.length >= 1 && <button onClick={props.removeTeam}>Clear Team </button>}
            <div>
                {props.pokemons.map(pokemon =>
                    <Card onDoubleClickCard={props.removeFromTeam} key={pokemon.name}
                        pokemon={pokemon} onClickPokemon={props.onClickPokemon} />)}
            </div>
        </div>
    )

}

export default TeamList