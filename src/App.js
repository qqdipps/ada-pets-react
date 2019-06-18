import React, { Component } from 'react';
import PetList from './components/PetList';
import PetDetails from './components/PetDetails';
import SearchBar from './components/SearchBar';
import NewPetForm from './components/NewPetForm';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import pets from './data/pets.json';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      petList: pets,
      currentPet: undefined,
    };
  }

  onSelectPet = (petId) => {
    const pet = this.state.petList.find(pet => pet.id === petId)

    this.setState({
      currentPet: pet
    });
  }

  onDeletePet = (petId) => {
    const newPetList = this.state.petList.filter(pet => pet.id !== petId);

    this.setState({
      petList: newPetList
    });
  }

  render() {
    const { currentPet, petList } = this.state;

    return (
      <main className="App">
        <header className="app-header">
          <h1>Ada Pets</h1>
        </header>
        <section className="search-bar-wrapper">
          { /* Wave 4:  Place to add the SearchBar component */ }
          <SearchBar />
        </section>
        <section className="pet-list-wrapper">
          <PetList
            pets={petList}
            onSelectPet={this.onSelectPet}
            onDeletePet={this.onDeletePet} />
        </section>
        <PetDetails currentPet={currentPet} />
        <section className="new-pet-form-wrapper">
          { /* Wave 3:  Where NewPetForm should appear */ }
        </section>
      </main>
    );
  }
}

export default App;
