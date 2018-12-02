import React from 'react'

const PokemonDetails = (props) => {
    
    return props.pokemonToShow ? (
        <div className="card details">
            <div>
                <div className="row">{props.pokemonToShow.pokemonName}</div>
                <div className="row">
                    <div><img alt="" src={props.pokemonToShow.pokemonSprite} /></div>

                    {props.pokemonToShow.stats.map((stat, index) => <div
                        className="block"
                        key={index}
                    >{`${stat.stat.name}: ${stat.base_stat}`}
                    </div>)} 
                 </div>
            </div>
        </div>
    ) : null

}

export default PokemonDetails