import React from 'react';
import ReactDOM from 'react-dom';


export default class Spaceship extends React.Component {
  render() {
    return (
      <div className="Spaceship">
        <h1>Name:{this.props.name}</h1>
        <h2>SPeed:{this.props.speed}</h2>
        <strong>Color: {this.props.colors.join(' , ')}</strong>
        <h2>has_rockets:{this.props.hasRockets}</h2>

      </div>
    );
  }
}


Spaceship.defaultProps = {
  speed : slow,
  hasRockets: false,
  colors:{['black' , 'red']},
};

ReactDOM.render(
  <Spaceship
  name="Falcon9"
  />,
  document.getElementById('root'));
