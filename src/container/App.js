import React, { Component } from 'react'

import '../App.css'

import TeamList from './TeamList'
import PokemonDetails from '../component/PokemonDetails'
import WildPokemonList from './WildPokemonList'
import Search from '../component/Search'

const url = `https://pokeapi.co/api/v2/pokemon/`

class App extends Component {

  state = {
    teamPokemon: [],
    allPokemon: [],
    currentPokemon: null,
    searchQuery: ''
  }

  componentDidMount() {
    fetch(url)
      .then(resp => resp.json())
      .then(data => {
        this.setState({ allPokemon: data.results })
      })
  }

  getFilteredPokemon = () => {
    let newArray = this.state.allPokemon.filter(pokemon => !this.state.teamPokemon.includes(pokemon))
      .filter(p => p.name.includes(this.state.searchQuery))
    return newArray
  }



  addPokemonToTeam = (pokemon) => {
    if (this.state.teamPokemon.length < 6) {
      this.setState({
        teamPokemon: [...this.state.teamPokemon, pokemon]

      })
    }
  }

  removePokemonToTeam = (pokemon) => {
    let index = this.state.teamPokemon.findIndex(pokemonItem => pokemonItem.name === pokemon.name)
    let newArray = [...this.state.teamPokemon]
    newArray.splice(index, 1)
    this.setState({
      teamPokemon: newArray
    })
  }

  onSelectPokemon = (pokemon) => {
    let URL = pokemon.url
    fetch(URL)
      .then(res => res.json())
      .then(data => {
        this.setState({
          currentPokemon: {
            pokemonName: pokemon.name,
            pokemonSprite: data.sprites.front_default,
            stats: data.stats
          }
        })
      })
  }

  updateFilter = (newFilter) => {
    this.setState({ searchQuery: newFilter })
  }

removeTeam = () => {
this.setState({
  teamPokemon: []
})  
}

  render() {
    return (
      <div className="App">
        <img alt="Pokemon" width="200"
          src="https://d33wubrfki0l68.cloudfront.net/42936b3e4d03c9b7c5927e3752a36cef7ff8bdf0/53627/images/pokemon.png" />
        
        <TeamList removeTeam={this.removeTeam} pokemons={this.state.teamPokemon} removeFromTeam={this.removePokemonToTeam} onClickPokemon={this.onSelectPokemon} />
         <PokemonDetails pokemonToShow={this.state.currentPokemon} />

        <h3>Search:</h3><Search updateFilter={this.updateFilter} value={this.state.searchQuery} />
        <WildPokemonList pokemons={this.getFilteredPokemon()} addToTeam={this.addPokemonToTeam}
          onClickPokemon={this.onSelectPokemon} />
      </div>
    )
  }
}

export default App
