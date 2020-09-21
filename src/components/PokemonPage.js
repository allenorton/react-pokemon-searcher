import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'

class PokemonPage extends React.Component {
  state = {
    pokemons: [],
    searchTxt: ''
  }

  pokemonsURL = 'http://localhost:3000/pokemon'

  componentDidMount() {
    fetch(this.pokemonsURL).then(res => res.json()).then(json => this.setState({ pokemons: json }))
  }

  searchPokes = (e) => {
    this.setState({ searchTxt: e.target.value })
  }

  addPokemon = (pokeInfo) => {
    fetch(this.pokemonsURL, {
      method: "POST",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(pokeInfo)
    })
      .then(res => res.json())
      .then(poke => this.setState({ searchTxt: '', pokemons: [...this.state.pokemons, poke] }))
  }


  render() {
    const wantedPokes = this.state.pokemons.filter(poke => poke.name.includes(this.state.searchTxt))
    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm addPokemon={this.addPokemon} />
        <br />
        <Search change={this.searchPokes} />
        <br />
        <PokemonCollection pokemons={wantedPokes} />
      </Container>
    )
  }
}

export default PokemonPage
