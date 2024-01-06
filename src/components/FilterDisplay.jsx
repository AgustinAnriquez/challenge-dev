import React from 'react'
import CloseButton from 'react-bootstrap/CloseButton';
function FilterDisplay({ gender, status, species, search, closeFilterGender, closeFilterStatus, closeFilterSpecies, closeSearchFilter }) {
    
    const handleGenderClose= () => {
        closeFilterGender("");
      };

      const handleStatusClose = () => {
        closeFilterStatus("");
      };

      const handleSpeciesClose = () => {
        closeFilterSpecies("");
      };
      const handleSearchClose = () => {
        closeSearchFilter("");
      };

    return (
        <div data-bs-theme="dark" className='bg-dark py-2 container'>
        {gender? (
        <span className="mx-1">
                <CloseButton onClick={handleGenderClose} />
                {gender}
            </span>
        ) : null}
        {status? (
        <span className="mx-1">
                <CloseButton onClick={handleStatusClose}/>
                {status}
            </span>
        ) : null}
         {species? (
        <span className="mx-1" >
                <CloseButton onClick={handleSpeciesClose}/>
                {species}
            </span>
        ) : null}
         {search? (
        <span className="mx-1" >
                <CloseButton onClick={handleSearchClose}/>
                {search}
            </span>
        ) : null}
    </div>
    )
}

export default FilterDisplay