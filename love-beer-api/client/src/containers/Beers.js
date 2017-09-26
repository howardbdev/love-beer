import React, { Component } from 'react';

class Beers extends Component {
  constructor(props) {
    super(props);

    this.state = {
      beers: []
    };
  }

  componentWillMount() {
    fetch('/api/beers')
      .then(response => response.json())
      .then(beers => this.setState({ beers }))
    }

  render() {
    return(
      <div>
        {this.state.beers.map((beer, i)=> {
          return (
            <div className="beer" key={i}>
              <h3>{beer.name}</h3>
              <p>{beer.description}</p>
            </div>
          )
        })}
      </div>
    );
  }
}

export default Beers;
