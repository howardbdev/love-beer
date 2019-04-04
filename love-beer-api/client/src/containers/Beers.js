import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getBeers } from '../actions/beers'
import '../css/Beers.css';
import BeerCard from '../components/BeerCard'

class Beers extends Component {
  constructor(props) {
    super(props)

    this.state = {
      sortOrder: "none"
    }
  }

  componentDidMount() {
    this.props.getBeers()
  }

  handleClick = () => {
    const newOrder = this.state.sortOrder === "upvotes" ? "name" : "upvotes"
    this.setState({
      sortOrder: newOrder
    })
  }

  compare = sortProp => (a, b) => {
    if (a[sortProp] < b[sortProp]) { return sortProp !== 'upvotes' ? -1 : 1 }
    if (a[sortProp] > b[sortProp]) { return sortProp !== 'upvotes' ? 1 : -1 }
    return 0
  }

  render() {
    console.log("RENDERING Beers component!  ")
    const buttonText = this.state.sortOrder === "upvotes" ? "Sort By Name" : "Sort by Upvotes"
    const sortedBeers = this.props.beers.slice().sort(this.compare(this.state.sortOrder))

    return (
      <div>
        <div>
          <button
            onClick={this.handleClick}
          >{ buttonText }
          </button>
        </div>
        { sortedBeers.map((beer, index) => <BeerCard
          beer={beer}
          key={index}
        />) }
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
