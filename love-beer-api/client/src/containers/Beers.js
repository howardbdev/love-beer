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
    const newOrder = this.state.sortOrder === "votes" ? "alpha" : "votes"
    this.setState({
      sortOrder: newOrder
    }, () => {
      console.log("new state is: ", this.state, "sorted array is", this.sortAlphabetically(),
    "sorted by votes", this.sortByVotes())
    })
  }

  sortAlphabetically = () => {
    return this.props.beers.slice().sort((a, b) => {
      const nameA = a.name
      const nameB = b.name

      if (nameA < nameB) { return -1 }
      if (nameA > nameB) { return 1 }
      return 0
    })
  }

  sortByVotes = () => this.props.beers.slice().sort((a,b) => b.upvotes - a.upvotes)

  render() {

    const sortedBeers = this.state.sortOrder === "votes" ? this.sortByVotes() : this.sortAlphabetically()

    return (
      <div>
        <div>
          <button
            onClick={this.handleClick}
          >Toggle Sort
          </button>
        </div>
        {sortedBeers.map((beer, index) => <BeerCard
          beer={beer}
          key={index}
        />)}
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
