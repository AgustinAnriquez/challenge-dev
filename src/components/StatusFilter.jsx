import Dropdown from 'react-bootstrap/Dropdown';
import React, { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { GET_STATUS } from '../graphql/Queries';

function StatusFilter({ onStatusChange }) {
    const [uniqueStatus, setUniqueStatus] = useState([]);
    const [selectedStatus, setSelectedStatus] = useState(''); 
    const { loading, error, data } = useQuery(GET_STATUS);
    useEffect(() => {
        if (!loading && !error && data) {
          const characters = data.characters.results || [];
          const statusFromData = Array.from(new Set(characters.map((character) => character.status)));
          setUniqueStatus((prevStatus) => Array.from(new Set([...prevStatus, ...statusFromData])));
        }
      }, [loading, error, data]);
    
      const handleStatusChange = (value) => {
        onStatusChange(value);
        setSelectedStatus(value);
      };
    
    return (
        <Dropdown>
        <Dropdown.Toggle variant="dark" id="dropdown-basic">
          Status
        </Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item onClick={() => handleStatusChange('')} key="All">
          All
        </Dropdown.Item>
        {uniqueStatus.map((status) => (
          <Dropdown.Item onClick={() => handleStatusChange(status)} key={status}>
            {status}
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
    
    )
}

export default StatusFilter