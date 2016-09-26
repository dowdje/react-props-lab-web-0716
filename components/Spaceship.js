const React = require('react')

class Spaceship extends React.Component {
  render () {
    return (
      <div>
        <ul>{this.props.name}
          <li>Speed: {this.props.speed}</li>
          <li>Rockets: {this.props.hasRockets}</li>
          <li>Colors: {this.props.colors.join(" ")}</li>
        </ul>

      </div>
    )
  }
}

Spaceship.defaultProps = {
  name: 'jagod',
  speed: 100,
  hasRockets: false,
  colors: ['black', 'red']

}

module.exports = Spaceship