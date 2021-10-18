import React, { Component, useEffect, useState } from 'react';
import {Table, Button, Row, Col, Container} from 'react-bootstrap';
import './ReadDriver.css';
import axios from 'axios';
import {useParams, useLocation, useHistory} from "react-router";
import { Link } from 'react-router-dom';


function ReadDriver (){

 
   const [driverData, setDriverData] = useState([]);
   const [driverID, setDriverID] = useState('');
   let {name} = useParams();
  
  useEffect(
    () => {
      setDriverID(localStorage.getItem('id'));
      console.log(driverID);
    },
    []
  )

  const callMockAPIWithAxiosGET = () => {
    const endpointURL = `https://6151d1894a5f22001701d469.mockapi.io/api/v1/users/${name}`;
    axios.get(endpointURL)
    .then(response => setDriverData(response.data));
  };

    useEffect(() => {
      callMockAPIWithAxiosGET();
    }, []);

  return(

    <main className="page user-details">
      <section className="user-details backdrop">
    <Container>
      <div class="block-heading">
      <h2>Driver Details</h2>
          <p></p>
          </div>
    <Row>
        <Col></Col>
        <Col xs={12}>
            <section className="user-content">
                <fieldset>
                    
                    <h2 className="section-heading">User Details</h2>
                    <div className="userdetailFormat">
                      <p>Driver ID: <span class="spantext">{driverData.id}</span></p>
      <p>Driver Name: <span class="spantext">{driverData.prefix} {driverData.firstName} {driverData.lastName}</span></p>   
      <p>Contact Number: <span class="spantext">{driverData.contactNumber}</span></p>
      </div>
      <h2 className="section-heading">Address</h2>
      <div className="addressdetailFormat">
      <p><span class="spantext">{driverData.addressLine1}</span></p>
      <p><span class="spantext">{driverData.addressLine2}</span></p>
      <p><span class="spantext">{driverData.city}</span></p>
      <p><span class="spantext">{driverData.postcode}</span></p>
      </div>
      <h2 className="section-heading">Vehicle Details</h2>
      <div className="vechicledetailFormat">
      <p>Vehicle Type: <span class="spantext">{driverData.vehicleType}</span></p>
      <p>Engine Size: <span class="spantext">{driverData.engineSize} (CC)</span></p>
      <p>Current Value: <span class="spantext">£{driverData.currentVehicleValue}</span></p>
      <p>Date Registered: <span class="spantext">{driverData.dateVehicleRegistered}</span></p>
      </div>
      <h2 className="section-heading">Policy Details</h2>
      <div className="policydetailFormat">
      <p>Number of Addditional Drivers: <span class="spantext">{driverData.additionalDrivers}</span></p>
      <p>Used for Commercial Purposes: <span class="spantext">{driverData.usedCommercialPurposes}</span></p>
      <p>Used Outside State: <span class="spantext">{driverData.usedOutsideState}</span></p>
      </div>
      
<div className="buttonFormat">
<Link to="/administrator">
      <Button type="submit">Admin Page</Button>
    </Link>
</div>

</fieldset>
        </section></Col>


        <Col></Col>
    </Row> 
    
</Container>
</section>
</main>
);

}

export default ReadDriver;
