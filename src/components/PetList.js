import React from 'react';
import PropTypes from 'prop-types';
import PetCard from './PetCard';

import 'bootstrap/dist/css/bootstrap.min.css';

const PetList = props => {
  console.log(props.pets);
  const listPets = props.pets.map(pet => {
    return (
      <PetCard
        {...pet}
        onSelectPetCallback={props.onSelectPet}
        onPetRemoveCallback={props.onPetRemove}
      />
    );
  });
  return <div className="card-group">{listPets}</div>;
};

PetList.propTypes = {
  pets: PropTypes.array.isRequired,
  onSelectPet: PropTypes.func,
};

export default PetList;
