import {GET_CHARACTERS} from '../graphql/Queries'
import {useQuery} from '@apollo/client';
import Character from './Character';

function CharactersList() {
    const { loading, error, data } = useQuery(GET_CHARACTERS);
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error : {error.message}</p>;
    return(
      <div className='container bg-danger'>
         <div className='row'>
          {data && data.characters.results.map(({ id, name, image}) => {
              return(
                <div className='col-md-4' key={id}>
                  <Character id ={id} name={name} image={image} />
                </div>
              ) 
            })}
         </div>
      </div>
     ) 
}

export default CharactersList