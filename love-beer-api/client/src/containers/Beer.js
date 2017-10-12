import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getBeer } from '../actions/beers';
import './Beers.css';
import BeerShow from '../components/BeerShow'

// console.log("PARAMS -->", params["match"]["params"]["id"])
class Beer extends Component {
  constructor(props) {
    super()
    console.log("PROPS MATCH PARAMS ID IS : ",props["match"]["params"]["id"])
    this.beer_id = props["match"]["params"]["id"]
    console.log("beer_id is : ", this.beer_id)
  }
  componentDidMount() {
    console.log("BEER ID IS: ", this.beer_id)
    this.props.getBeer(this.beer_id)
  }
  render() {
    console.log("IN BEER RENDER", this.props.beer)
    return (
      <div>
        <BeerShow beer={this.props.beer}/>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return ({
      beer: state.beer,
    })
}

export default connect(mapStateToProps, {getBeer})(Beer);
