import React, { Component } from 'react';
import PetList from './components/PetList';
// import PetCard from './components/PetCard';
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
      maxId: pets.length,
    };
  }

  onPetSelect = id => {
    this.setState({
      currentPet: this.findPetById(id),
    });
  };

  findPetById = id => {
    return this.state.petList.find(pet => {
      return pet.id === id;
    });
  };

  onPetRemove = id => {
    if (this.state.currentPet && this.state.currentPet.id === id) {
      this.setState({
        currentPet: undefined,
      });
    }
    const pets = this.state.petList;
    pets.splice(pets.indexOf(this.findPetById(id)), 1);
    this.setState({
      petList: pets,
    });
  };

  createNewPet = pet => {
    console.log('here I am');
    console.log(pet);
    pet.id = this.state.maxId + 1;
    this.state.petList.push(pet);
    this.setState({ petList: this.state.petList, maxId: pet.id });
  };

  petDetails = () => {
    const { currentPet } = this.state;
    if (currentPet) {
      return <PetDetails currentPet={currentPet} />;
    }
  };
  render() {
    return (
      <main className="App">
        <header className="app-header">
          <h1>Ada Pets</h1>
        </header>
        <section className="search-bar-wrapper">
          {/* Wave 4:  Place to add the SearchBar component */}
          <SearchBar />
        </section>
        <section>{this.petDetails()}</section>

        {/* Wave 2:  Where Pet Details should appear */}
        <section className="pet-list-wrapper">
          {/* Wave 1:  Where PetList should appear */}
          <PetList
            pets={this.state.petList}
            onSelectPet={this.onPetSelect}
            onPetRemove={this.onPetRemove}
          />
        </section>
        <section className="new-pet-form-wrapper">
          {/* Wave 3:  Where NewPetForm should appear */}
          <NewPetForm onSubmitPetCallback={this.createNewPet} />
        </section>
      </main>
    );
  }
}

export default App;
