import React from 'react';
import PropTypes from 'prop-types';
import PetCard from './PetCard';

import 'bootstrap/dist/css/bootstrap.min.css';


const PetList = (props) => {
  const { pets, onSelectPet, onDeletePet } = props;
  const petCards = pets.map(
    ({ id, name, species, about, location}) => {
      return <PetCard
               key = {id}
               id = {id}
               name = {name}
               species = {species}
               about = {about}
               location = {location}
               onSelectPet = {onSelectPet}
               onDeletePet = {onDeletePet} />
    })

  return (
    <div className="card-group">
      {petCards}
    </div>
  )
}

PetList.propTypes = {
  pets: PropTypes.array.isRequired,
  onSelectPet: PropTypes.func,
  onDeletePet: PropTypes.func,
};

export default PetList;
