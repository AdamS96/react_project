import React, { useState } from 'react';
import './DeleteDetails.css';
import {Form, Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';

function DeleteDetails() {

  const [dID, setdID] = useState('');
 // const [data, setData] = useState([]);

  // useEffect(
  //   () => {
  //     setdID(localStorage.getItem('id'));
  //   },
  //   []
  // )

  // const callMockApiWithAxiosGET = () => {
  //   const endpointURL = `https://6151d1894a5f22001701d469.mockapi.io/api/v1/users`;
  //   axios.get(endpointURL)
  //     .then(response => setData(response.data));
  // };

  const onDelete = (dID) => {
    const endpointURL = `https://6151d1894a5f22001701d469.mockapi.io/api/v1/users/${dID}`;
    axios.delete(endpointURL)
    //.then(() => callMockApiWithAxiosGET())
    .catch(
      (err) => { console.log(err) }
      );
    }


  return(
  <Form>
    <Form.Group className="mb-3" controlId="id" onChange={e=>setdID(e.target.value)}>
      <Form.Label>Driver ID: </Form.Label>
      <Form.Control type="number" placeholder="Driver ID" aria-label="driver ID" aria-describedby="basic-addon1" />
    </Form.Group>
    <Link to="/deletedetails">
      <Button type="submit" onClick={()=>onDelete(dID)}>Submit</Button>
    </Link>

  </Form>
);
  }

export default DeleteDetails;
