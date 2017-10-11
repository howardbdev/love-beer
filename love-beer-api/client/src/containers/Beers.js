import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getBeers } from '../actions/beers'
import './Beers.css';
import BeerCard from '../components/BeerCard'

class Beers extends Component {
  componentDidMount() {
    this.props.getBeers()
  }
  render() {
    console.log("BEERS.JS, this.props.beers ->", this.props.beers)
    return (
      <div>
        {this.props.beers.map((beer) => <BeerCard beer={beer} key={beer.id} />)}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return ({
      beers: state.beers,
    })
}

export default connect(mapStateToProps, {getBeers})(Beers);
