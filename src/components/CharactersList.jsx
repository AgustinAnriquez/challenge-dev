import {GET_CHARACTERS} from '../graphql/Queries'
import {useQuery} from '@apollo/client';
import Character from './Character';
import NavPage from './NavPage';
import { useState } from 'react';
import Search from './Search';

function CharactersList() {
    const [page, setPage] = useState(1);
    const [searchName, setSearchName] = useState('');
    const { loading, error, data } = useQuery(GET_CHARACTERS,{
      variables: { page, name: searchName },
    });
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error : {error.message}</p>;

    const handleSearchClick = (value) => {
      setSearchName(value); 
      setPage(1);
    };

    return(
      
      <div className='container'>
        <Search onSearchClick={handleSearchClick}/>
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