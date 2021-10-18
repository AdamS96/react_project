import React, { useEffect, useState } from 'react';
import './ReadDetails.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
import {Form, Button, Table} from 'react-bootstrap';

function ReadDetails() {

  const [data, setData] = useState([]);
  const [dID, setdID] = useState('');
  
// useEffect(
//   () => {
//     setdID(localStorage.getItem('id'));
//   },
//   []
// )
  
  const callMockAPIWithAxiosGET = () => {
    const endpointURL = `https://6151d1894a5f22001701d469.mockapi.io/api/v1/users/${dID}`;
    axios.get(endpointURL)
    .then(response => setData(response.data));
    console.log(endpointURL);
    console.log(data);
  };

    useEffect(() => {
      callMockAPIWithAxiosGET();
    }, []);

return(
  <><Form>
    <Form.Group className="mb-3" controlId="id" onChange={e=>setdID(e.target.value)}>
      <Form.Label>Driver ID: </Form.Label>
      <Form.Control type="number" placeholder="Driver ID" aria-label="driver ID" aria-describedby="basic-addon1" />
    </Form.Group>
    <Link to="/readdetails/">
      <Button type="submit" onClick={callMockAPIWithAxiosGET}>Submit</Button>
    </Link>

  </Form><Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th>ID</th>
          <th>Prefix</th>
          <th>First Name</th>
          <th>Last Name</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>


      </tbody>
    </Table></>
);
}

export default ReadDetails;
