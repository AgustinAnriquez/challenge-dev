import {GET_CHARACTERS} from '../graphql/Queries'
import {useQuery} from '@apollo/client';
import Character from './Character';
import NavPage from './NavPage';
import { useState } from 'react';
import Search from './Search';
import GenderFilter from './GenderFilter';
import StatusFilter from './StatusFilter';
import SpeciesFilter from './SpeciesFilter'
import { LuRefreshCcwDot } from "react-icons/lu";
function CharactersList() {
    const [page, setPage] = useState(1);
    const [searchName, setSearchName] = useState('');
    const [genderFilter, setGenderFilter] = useState('');
    const [statusFilter, setStatusFilter] = useState('');
    const [speciesFilter, setSpeciesFilter] = useState('');
    const { loading, error, data } = useQuery(GET_CHARACTERS,{
      variables: { page, name: searchName, gender: genderFilter, status:statusFilter, species:speciesFilter},
    });
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error : {error.message}</p>;

    const handleSearchClick = (value) => {
      setSearchName(value); 
      setPage(1);
    };

    const handleGenderChange = (value) => {
      setGenderFilter(value);
      setPage(1);
    };

    const handleStatusChange = (value) => {
      setStatusFilter(value);
      setPage(1);
    };

    const handleSpeciesChange = (value) => {
      setSpeciesFilter(value);
      setPage(1);
    };

    const handleRefreshClick = () =>{
      setSearchName(""); 
      setGenderFilter("");
      setStatusFilter("");
      setSpeciesFilter("");
      setPage(1);
    }

    return(
      
      <div className='container'>
        <Search onSearchClick={handleSearchClick}/>
        <div className="d-flex container justify-content-center py-2 my-1">
          <GenderFilter onGenderChange={handleGenderChange}/>
          <StatusFilter onStatusChange={handleStatusChange}/>
          <SpeciesFilter onSpeciesChange={handleSpeciesChange}/>
          <button onClick={handleRefreshClick}> <LuRefreshCcwDot /> </button>
        </div>
        <NavPage page={page} setPage={setPage}/>
         <div className='row'>
          {data && data.characters.results.map(({ id, name, image}) => {
              return(
                <div className='col-md-4' key={id}>
                  <Character id ={id} name={name} image={image} />
                </div>
              ) 
            })}
         </div>
         <NavPage page={page} setPage={setPage}/>
      </div>
      
     ) 
    
}

export default CharactersList