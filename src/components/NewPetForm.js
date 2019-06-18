import React, { Component } from 'react';
import PropTypes from 'prop-types';

import 'bootstrap/dist/css/bootstrap.min.css';
import './NewPetForm.css';

class NewPetForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      images: [],
      id: null,
      name: '',
      species: '',
      about: '',
      location: '',
    };
  }

  handleOnChange = event => {
    const newPet = {};
    newPet[event.target.name] = event.target.value;
    this.setState(newPet);
  };

  handleSubmit = event => {
    event.preventDefault();
    console.log(this.state);
    this.props.onSubmitPetCallback(this.state);
    this.setState({
      images: [],
      id: null,
      name: '',
      species: '',
      about: '',
      location: '',
    });
  };

  render() {
    return (
      <form className="new-pet-form" onSubmit={this.handleSubmit}>
        <h3>Add a Pet</h3>
        {/* A form should go here! */}
        <input
          name="name"
          onChange={this.handleOnChange}
          value={this.state.name}
        />
        <input
          name="species"
          onChange={this.handleOnChange}
          value={this.state.species}
        />
        <input
          name="about"
          onChange={this.handleOnChange}
          value={this.state.about}
        />
        <input
          name="location"
          onChange={this.handleOnChange}
          value={this.state.location}
        />
        <input
          className="btn btn-success new-pet-form--submit"
          type="submit"
          name="submit"
          value="Add a Pet"
        />
      </form>
    );
  }
}

NewPetForm.propTypes = {
  addPetCallback: PropTypes.func.isRequired,
};

export default NewPetForm;
