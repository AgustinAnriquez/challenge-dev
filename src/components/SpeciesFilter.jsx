import Dropdown from 'react-bootstrap/Dropdown';
import React, { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { GET_SPECIES } from '../graphql/Queries';

function SpeciesFilter({ onSpeciesChange }) {
    const [uniqueSpecies, setUniqueSpecies] = useState([]);
    const [selectedSpecies, setSelectedSpecies] = useState(''); 
    const { loading, error, data } = useQuery(GET_SPECIES);
    useEffect(() => {
        if (!loading && !error && data) {
          const characters = data.characters.results || [];
          const speciesFromData = Array.from(new Set(characters.map((character) => character.species)));
          setUniqueSpecies((prevSpecies) => Array.from(new Set([...prevSpecies, ...speciesFromData])));
        }
      }, [loading, error, data]);
    
      const handleSpeciesChange = (value) => {
        onSpeciesChange(value);
        setSelectedSpecies(value);
      };
    
    return (
        <Dropdown>
        <Dropdown.Toggle variant="dark" id="dropdown-basic">
          Species
        </Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item onClick={() => handleSpeciesChange('')} key="All">
          All
        </Dropdown.Item>
        {uniqueSpecies.map((species) => (
          <Dropdown.Item onClick={() => handleSpeciesChange(species)} key={species}>
            {species}
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
    
    )
}

export default SpeciesFilter