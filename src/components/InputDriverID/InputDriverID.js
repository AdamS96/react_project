import './InputDriverID.css';
import {Form, Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import React, { Component, useEffect, useState } from 'react';
import {BrowserRouter, Route, Switch, } from 'react-router-dom';
import {useParams, useHistory} from "react-router";
import { render } from '@testing-library/react';
import axios from 'axios';


function InputDriverID() {

  
  const [driverID, setDriverID] =  useState('');
  const [driverData, setDriverData] = useState([]);
  let history = useHistory();


  // const callMockAPIWithAxiosGET = () => {
  //   console.log("Testing" + driverID)
  //   const endpointURL = `https://6151d1894a5f22001701d469.mockapi.io/api/v1/users/${driverID}`;
  //   console.log(endpointURL)
  //   axios.get(endpointURL)
  // };

  function setLocalStorage(data) {
    console.log(data);
    console.log(driverData);
    localStorage.setItem("id", data.id);
    localStorage.setItem("prefix", data.prefix);
    localStorage.setItem("firstName", data.firstName);
    localStorage.setItem("lastName", data.lastName);
    localStorage.setItem("contactNumber", data.contactNumber);
    localStorage.setItem("addressLine1", data.addressLine1);
    localStorage.setItem("addressLine2", data.addressLine2);
    localStorage.setItem("city",data.city);
    localStorage.setItem("postcode",data.postcode);
    localStorage.setItem("vehicleType",data.vehicleType);
    localStorage.setItem("engineSize", data.engineSize);
    localStorage.setItem("currentVehicleValue", data.currentVehicleValue);
    localStorage.setItem("dateVehicleRegistered", data.dateVehicleRegistered);
    localStorage.setItem("additionalDrivers", data.additionalDrivers);
    localStorage.setItem("commercialPurposes", data.commercialPurposes);
    localStorage.setItem("usedOutsideState", data.usedOutsideState);

  }

  // useEffect(() => {
  //   callMockAPIWithAxiosGET();
  // }, []);

  return(




    <Form>
        <Form.Group className="mb-3" controlId="driverID" >
          <Form.Label>Driver ID: </Form.Label>
          <Form.Control type="number" onChange={e => setDriverID(e.target.value)} placeholder="Driver ID" aria-label="driver ID" aria-describedby="basic-addon1" />
        </Form.Group>
        
          <Button type="submit" onClick={() => {history.push(`./readdriver/${driverID}`)}}>Submit</Button>
        

      </Form>
      
);
}

export default InputDriverID;
