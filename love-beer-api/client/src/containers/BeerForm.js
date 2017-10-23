import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateBeerFormData } from '../actions/beerForm';
import { createBeer } from '../actions/beers'

class BeerForm extends Component {

  handleOnChange = event => {
    const { name, value } = event.target;
    const currentBeerFormData = Object.assign({}, this.props.beerFormData, {
        [name]: value
    })
    this.props.updateBeerFormData(currentBeerFormData)
  }

  handleOnSubmit = event => {
    const l = this.props.beers.length
    event.preventDefault();
    this.props.createBeer(this.props.beerFormData)
    setTimeout(()=>{
      if (l < this.props.beers.length) {
        this.props.history.push(`/beers/${this.props.beers[this.props.beers.length-1].id}`)
      }
    }, 1000)
  }

  render() {
    const { name, brewer_name, style, description, image_url } = this.props.beerFormData;
    return (
      <div id="BeerForm" className="BeerCard BeerForm">
        <h2>Add a Beer!</h2>
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
          <input type="submit" value="Add Beer" className="create-beer-button"/>
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


export default connect(mapStateToProps, {updateBeerFormData, createBeer})(BeerForm);

// .then(setTimeout(()=>{this.props.history.push('/beers')}, 1000))
