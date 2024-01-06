import { gql } from '@apollo/client';

export const GET_CHARACTERS = gql`
query GetCharacters($page: Int!, $name: String, $gender: String, $status: String, $species: String){
    characters(page: $page, filter: { name: $name , gender: $gender, status: $status, species: $species}){
      results{
        id
        name
        image
      }
    }
    }    
`

export const GET_CHARACTER = gql`
query GetCharacter($id: ID!){
  character(id: $id){
    id
    name
    status
    image
    gender
    species
    type
    location{
      name
    }
    origin{
      name
    }
    origin{
      dimension
    }
  }
}
`

export const GET_GENDERS = gql`
query GetGenders{
  characters {
    results {
      gender
    }
  }
}
`
export const GET_SPECIES = gql`
query GetSpecies{
  characters {
    results {
      species
    }
  }
}
`

export const GET_STATUS = gql`
query GetStatus{
  characters {
    results {
      status
    }
  }
}
`