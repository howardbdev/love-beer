import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateBeerFormData } from '../actions/beerForm';
import { createBeer, updateBeer } from '../actions/beers'

let EDIT_STATUS = false;

class BeerForm extends Component {

  componentDidMount() {
    console.log("CDM",this.props.location.state)
    if (this.props.location.state) {
      console.log("CDM",this.props.location.state.current_beer.beer)
      console.log('YEP')
      EDIT_STATUS = true;
      this.props.updateBeerFormData(this.props.location.state.current_beer.beer)
    } else {
      console.log("NOPE")
    }
  }

  handleOnChange = event => {
    const { name, value } = event.target;
    const currentBeerFormData = Object.assign({}, this.props.beerFormData, {
        [name]: value
    })
    this.props.updateBeerFormData(currentBeerFormData)
  }

  handleOnSubmit = event => {
    event.preventDefault();
    EDIT_STATUS ? this.props.updateBeer(this.props.beerFormData, this.props.history) : this.props.createBeer(this.props.beerFormData, this.props.history)
  }

  render() {
    console.log("Current Beer",this.props.current_beer)
    console.log("Current props loc",this.props.location.state)
    console.log("beer form data",this.props.beerFormData)
    const { name, brewer_name, style, description, image_url } = this.props.beerFormData;
    return (
      <div id="BeerForm" className="BeerCard BeerForm">
        <h2>{EDIT_STATUS ? `Edit Beer Form` : 'Add a New Beer!'}</h2>
        <form action="" onSubmit={this.handleOnSubmit}>
          <div>
            <label htmlFor="name">Name*: </label>
            <input
              type="text"
              name="name"
              value={name}
              onChange={this.handleOnChange}
            /><br/>
          </div>
          <div>
            <label htmlFor="brewer_name">Brewer*: </label>
            <input
              type="text"
              name="brewer_name"
              value={brewer_name}
              onChange={this.handleOnChange}
            /><br/>
          </div>
          <div>
            <label htmlFor="style">Style: </label>
            <input
              type="text"
              name="style"
              value={style}
              onChange={this.handleOnChange}
            /><br/>
          </div>
          <div>
            <label htmlFor="image_url">Image URL: </label>
            <input
              type="text"
              name="image_url"
              value={image_url}
              onChange={this.handleOnChange}
            /><br/>
          </div>
          <div>
            <label htmlFor="description">Description*: </label>
            <textarea
              rows="5"
              type="text"
              name="description"
              value={description}
              onChange={this.handleOnChange}
            /><br/>
          </div>
          <input type="submit" value={EDIT_STATUS ? 'Submit Changes' : 'Add Beer'} className="create-beer-button"/>
          <p className="required-fields-p">*Required fields</p>
        </form>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    beerFormData: state.beerFormData,
    beers: state.beers
  }
}


export default connect(mapStateToProps, {updateBeerFormData, createBeer, updateBeer})(BeerForm);
