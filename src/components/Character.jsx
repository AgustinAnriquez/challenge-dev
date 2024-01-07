import Modal from 'react-bootstrap/Modal';
import { GET_CHARACTER } from '../graphql/Queries';
import { useQuery } from '@apollo/client';
import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function Character({ id, name, image }) {
  const { loading, error, data } = useQuery(GET_CHARACTER, {
    variables: { id },
  });

  const [show, setShow] = useState(false);

  if (loading) return <p>Loading...</p>;
  if (error) {
    console.error(error);
    return <p>Error: {error.message}</p>;
  }

  const character = data && data.character;

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className='character'>
      <div className="text-center p-5" onClick={handleShow}>
            <h3>{name}</h3>
            <img className="img-fluid rounded-pill" alt={name} src={`${image}`} />
          </div>
          <Modal show={show} onHide={handleClose} >
          <Modal.Header closeButton className='bg-white text-dark'>
            <Modal.Title >{character.name}</Modal.Title>
          </Modal.Header>
          <Modal.Body className='bg-dark text-white'>
            <Container>
              <Row className='align-items-center'>
                <Col className='text-center'>
                  <img className="img-fluid rounded-pill" alt={character.name} src={`${character.image}`} />
                </Col>
                <Col className='text-center'>
                  <p>Status: {character.status}</p>
                  <p>Gender: {character.gender}</p>
                  <p>Species: {character.species}</p>
                  <p>Type: {character.type}</p>
                  <p>Location: {character.location.name}</p>
                  <p>Origin: {character.origin.name}</p>
                  <p>Dimension: {character.origin.dimension}</p>
                </Col>
              </Row>
           </Container>
           
          </Modal.Body>
        </Modal>
    </div>
  );
}

export default Character;