import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateBeerFormData } from '../actions/beerForm';
import { createBeer, updateBeer, deleteBeer } from '../actions/beers'

let EDIT_STATUS = false;

class BeerForm extends Component {

  componentDidMount() {
    console.log("FIRST CDM", EDIT_STATUS)
    if (this.props.location.state) {
      EDIT_STATUS = true;
      this.props.updateBeerFormData(this.props.location.state.current_beer.beer)
    } else {
    }
    console.log("LASST CDM", EDIT_STATUS)
  }

  componentWillUnmount() {
    EDIT_STATUS = false
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
    EDIT_STATUS ? this.props.updateBeer(this.props.beerFormData, this.props.history) : this.props.createBeer(this.props.beerFormData, this.props.history);
    EDIT_STATUS=false;
  }

  handleDelete = event => {
    event.preventDefault();
    console.log("delelet event", event)
    console.log(this.props.beerFormData.id)
    this.props.deleteBeer(this.props.beerFormData.id, this.props.history)
  }



  render() {
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
        { EDIT_STATUS ? <button
          className='delete-link'
          onClick={this.handleDelete}
          >
            Delete this Beer
          </button>
           : null }
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


export default connect(mapStateToProps, {updateBeerFormData, createBeer, updateBeer, deleteBeer })(BeerForm);
