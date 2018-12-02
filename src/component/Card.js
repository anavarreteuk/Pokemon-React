import React from 'react'

const Card = (props) => {
    
    
    
    return (
        <div onDoubleClick={()=>props.onDoubleClickCard(props.pokemon)} onClick={()=> props.onClickPokemon(props.pokemon)} className = 'pokemon card'>
            {props.pokemon.name}
        </div>
    )

}

export default Card