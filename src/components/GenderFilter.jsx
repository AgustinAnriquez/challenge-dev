import Dropdown from 'react-bootstrap/Dropdown';
import React, { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { GET_GENDERS } from '../graphql/Queries';

function GenderFilter({ onGenderChange }) {
    const [uniqueGenders, setUniqueGenders] = useState([]);
    const { loading, error, data } = useQuery(GET_GENDERS);
    useEffect(() => {
        if (!loading && !error && data) {
          const characters = data.characters.results || [];
          const gendersFromData = Array.from(new Set(characters.map((character) => character.gender)));
          setUniqueGenders((prevGenders) => Array.from(new Set([...prevGenders, ...gendersFromData])));
        }
      }, [loading, error, data]);
    
      const handleGenderChange = (value) => {
        onGenderChange(value);
      };
    
    return (
        <Dropdown>
        <Dropdown.Toggle variant="dark" id="dropdown-basic">
          Gender
        </Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item onClick={() => handleGenderChange('')} key="All">
          All
        </Dropdown.Item>
        {uniqueGenders.map((gender) => (
          <Dropdown.Item onClick={() => handleGenderChange(gender)} key={gender}>
            {gender}
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
    
    )
}

export default GenderFilter