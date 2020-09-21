import React from 'react'
import PokemonCard from './PokemonCard'
import { Card } from 'semantic-ui-react'

class PokemonCollection extends React.Component {

  renderPokes = (pokemons) => {
    return pokemons.map(poke => <PokemonCard poke={poke} key={poke.id} />)
  }
  render() {
    let pokes = this.props.pokemons
    return (
      <Card.Group itemsPerRow={6}>
        {this.renderPokes(pokes)}
      </Card.Group>
    )
  }
}

export default PokemonCollection
