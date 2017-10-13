import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getBeer } from '../actions/beers';
import '../css/Beers.css';
import BeerShow from '../components/BeerShow'

class Beer extends Component {
  constructor(props) {
    super()
    this.beer_id = props.match.params.id
  }
  componentDidMount() {
    this.props.getBeer(this.beer_id)
  }
  render() {
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
