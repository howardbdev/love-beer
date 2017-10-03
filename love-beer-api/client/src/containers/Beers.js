import React, { Component } from 'react';
import { connect } from 'react-redux';

import './Beers.css';
import BeerCard from '../components/BeerCard'
import BeerForm from './BeerForm'

class Beers extends Component {
  componentDidMount() {
    this.props.dispatch({

    type: 'GET_BEERS_SUCCESS',
    beers: [{name: "some beer",
    style: "some style",
    brewer: {
      name: "some brewer",
    },
    image_url: "some.com",
    description: "that's some beer"}]
  })
  }
  render() {
    return (
      <div>
        {this.props.beers.map(beer => <BeerCard beer={beer} key={beer.id} />
        )}
        <BeerForm/>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return ({
      beers: state.beers,
    })
}

export default connect(mapStateToProps)(Beers);
