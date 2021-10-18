import {Form, Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import React, { Component, useEffect, useState } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import { render } from '@testing-library/react';
import './Testwrite.css';



function Testwrite () {

    
const [inputdriver, setInputDriver] = useState('');

const parentToChild = () =>{
  setInputDriver("Data from parent to child");
}

return(
  
//  const [tableData, setTableData] = useState([]);
//  const callMockApiWithAxiosGET = () => {
//   const endpointURL = "https://6151d1894a5f22001701d469.mockapi.io/api/v1/people";
//   axios.get(endpointURL)
//     .then(response => setTableData(response.data));
// };


//   const onButtonClick=(value)=>{
//     setInputID(value)
// }

//   const [driverID, setDriverID] =  useState('');

//   function setLocalStorage(driverID) {
//     console.log(driverID);
//     localStorage.setItem("driverID", driverID);
    
// //   }

//   return(

     <Form>
//     <Form.Group className="mb-3" controlId="driverID" onChange={e => setInputDriver(e.target.value)}>
//       <Form.Label>Driver ID: </Form.Label>
//       <Form.Control type="number" placeholder="Driver ID" aria-label="driver ID" aria-describedby="basic-addon1" />
//     </Form.Group>
    
//       <Button type="submit" onClick={() => parentToChild()}>Submit</Button>
    

   </Form>


   );
}
export default Testwrite;
