import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {
  constructor() {
    super()
    this.state = {
      clicked: false
    }
  }

  handleClick = () => {
    this.setState(prev => {
      return {clicked: !prev.clicked}})
  }

  setImage = () => {
    if (this.state.clicked) {
      return <img src={this.props.poke.sprites.back} alt="oh no!" />
    } else {
      return <img src={this.props.poke.sprites.front} alt="oh no!" />
    }
  }
  render() {
    let pokemon = this.props.poke
    return (
      <Card>
        <div>
          <div onClick={this.handleClick} className="image">
            {this.setImage()}
          </div>
          <div className="content">
            <div className="header">{pokemon.name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {pokemon.hp} hp
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
