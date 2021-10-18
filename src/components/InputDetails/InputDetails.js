import React, {useState} from 'react';
import './InputDetails.css';
import axios from 'axios';
import { Button, Form, Row, Col, Container } from 'react-bootstrap';
import $ from 'jquery';



function InputDetails() {

    const [prefix, setPrefix] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
  const [contactNumber, setContactNumber] = useState('');
     const [addressLine1, setAddressLine1] = useState('');
     const [addressLine2, setAddressLine2] = useState('');
    const [city, setCity] = useState('');
     const [postcode, setPostcode] = useState('');
     const [vehicleType, setVehicleType] = useState('');
     const [engineSize, setEngineSize] = useState('');
     const [currentVehicleValue, setCurrentVehicleValue] = useState('');
     const [dateVehicleRegistered, setDateVehicleRegistered] = useState('');
     const [additionalDrivers, setAdditionalDrivers] = useState('');
     const [usedCommercialPurposes, setUsedCommercialPurposes] = useState(false);
     const [usedOutsideState, setUsedOutsideState] = useState(false);


     function validateFormData(inputDetailsFormData){
        for (const [key,value] of Object.entries(inputDetailsFormData)){
          if (value === ""){
            alert(`Please enter ${key}!`);
            return false;
          }
        }
        return true;
      }


    const callMockAPI = (e) => {
        console.log(prefix + " " + firstName + " " + lastName + " ");

        e.preventDefault();

        const inputDetailsFormData = {
            prefix,
            firstName,
            lastName,
            contactNumber,
            addressLine1,
            addressLine2,
            city,
            postcode,
            vehicleType,
         engineSize,
            currentVehicleValue,
             dateVehicleRegistered,
            additionalDrivers,
             usedCommercialPurposes,
             usedOutsideState

        }

        if(!validateFormData(inputDetailsFormData)){
            return;
          }
        
        const endpointURL = "https://6151d1894a5f22001701d469.mockapi.io/api/v1/users";
        axios.post(endpointURL, inputDetailsFormData)
        .then(response => console.log(response.data))
        .catch(err => console.log());
        
        
        
    }
    return (
        <main className="page insurance-page">
            <section className="insurance-form backdrop">
                <Container>
                <div class="block-heading">
          <h2>Car Insurance Quote</h2>
          <p>Fill out this form to get a new qoute on your car insurance</p>
        </div>
                    <Form>
                        <div className="input-details">
                            <h3 className="section-heading">Personal Details</h3>

                            <Row className="g-3">

                                <Col sm={1}>
                                    <Form.Group className="mb-3" controlId="prefix" onChange={e=>setPrefix(e.target.value)}>
                                        <Form.Label>Prefix</Form.Label>
                                        <Form.Control type="text" placeholder="Mr" aria-label="prefix" aria-describedby="basic-addon1" />
                                    </Form.Group>
                                </Col>

                                <Col sm={4}>
                                    <Form.Group className="mb-3" controlId="firstName">
                                        <Form.Label>First Name</Form.Label>
                                        <Form.Control type="text" placeholder="Please enter your first name" aria-label="first name" aria-describedby="basic-addon1" onChange={e=>setFirstName(e.target.value)} />
                                    </Form.Group>
                                </Col>

                                <Col sm={5}>
                                    <Form.Group className="mb-3" controlId="lastName">
                                        <Form.Label>Last Name</Form.Label>
                                        <Form.Control  type="text" placeholder="Please enter your surname" aria-label="Last name" aria-describedby="basic-addon1" onChange={e=>setLastName(e.target.value)}/>
                                    </Form.Group>
                                </Col>

                                 <Col sm={5}>
                                    <Form.Group className="mb-3" controlId="contactNumber">
                                        <Form.Label>Contact Number</Form.Label>
                                        <Form.Control type="number" placeholder="Please enter your phone number" aria-label="phone number" aria-describedby="basic-addon1" onChange={e=>setContactNumber(e.target.value)}/>
                                    </Form.Group>
                                </Col>

                                 <Col sm={10}>
                                    <Form.Group className="mb-3" controlId="addressLine1">
                                        <Form.Label>Address line 1</Form.Label>
                                        <Form.Control  type="text" placeholder="Please enter your street address" aria-label="Address line 1" aria-describedby="basic-addon1" onChange={e=>setAddressLine1(e.target.value)}/>
                                    </Form.Group>
                                </Col>

                                <Col sm={10}>
                                    <Form.Group className="mb-3" controlId="addressLine2">
                                        <Form.Label>Address line 2</Form.Label>
                                        <Form.Control  type="text" placeholder="Please enter your street address" aria-label="Address line 2" aria-describedby="basic-addon1" onChange={e=>setAddressLine2(e.target.value)}/>
                                    </Form.Group>
                                </Col>

                                <Col sm={5}>
                                    <Form.Group className="mb-3" controlId="city">
                                        <Form.Label>City</Form.Label>
                                        <Form.Control  type="text" placeholder="Please enter your city" aria-label="City" aria-describedby="basic-addon1" onChange={e=>setCity(e.target.value)}/>
                                    </Form.Group>
                                </Col>

                                <Col sm={5}>
                                    <Form.Group className="mb-3" controlId="postcode">
                                        <Form.Label>Postcode</Form.Label>
                                        <Form.Control  type="text" placeholder="Please enter your postcode" aria-label="postcode" aria-describedby="basic-addon1" onChange={e=>setPostcode(e.target.value)}/>
                                    </Form.Group>
                                </Col>
                            </Row>

                            <h2 className="section-heading">Vehicle Details</h2>
                            <Row>

                                <Col sm={12}>
                                    <Form.Group className="mb-3" controlId="vehicleType">

                                        <Row>
                                            <Col md={6}>
                                                <Form.Label>Vehicle Type</Form.Label>
                                            </Col>
                                            <Col md={6}>
                                                <Form.Select onChange={e=>setVehicleType(e.target.value)}>
                                                    <option>Select Vehicle Type</option>
                                                    <option value="Cabriolet">Cabriolet</option>
                                                    <option value="Coupe">Coupe</option>
                                                    <option value="Estate">Estate</option>
                                                    <option value="Hatchback">Hatchback</option>
                                                    <option value="Other">Other</option>
                                                </Form.Select>
                                            </Col>
                                        </Row>
                                    </Form.Group>
                                </Col>
                                
                                <Col sm={12}>
                                    <Form.Group className="mb-3" controlId="engineSize">
                                        <Row>
                                            <Col md={6}>
                                                <Form.Label>Engine Size</Form.Label>
                                            </Col>
                                            <Col md={6}>
                                                <Form.Select onChange={e=>setEngineSize(e.target.value)}>
                                                    <option>Select Engine Size</option>
                                                    <option value="1000">1000</option>
                                                    <option value="1600">1600</option>
                                                    <option value="2000">2000</option>
                                                    <option value="2500">2500</option>
                                                    <option value="3000">3000</option>
                                                    <option value="Other">Other</option>
                                                </Form.Select>
                                            </Col>
                                        </Row>
                                    </Form.Group>
                                </Col>
                                
                                <Col sm={12}>
                                    <Form.Group className="mb-3" controlId="currentVehicleValue">
                                        <Row>
                                            <Col md={6}>
                                                <Form.Label>Current value</Form.Label>
                                            </Col>
                                            <Col md={6}>
                                                <Form.Control  type="number" placeholder="£" aria-label="current value" aria-describedby="basic-addon1" onChange={e=>setCurrentVehicleValue(e.target.value)}/>
                                            </Col>
                                        </Row>
                                    </Form.Group>
                                </Col>
                                
                                <Col sm={12}>
                                    <Form.Group className="mb-3" controlId="dateVehicleRegistered">

                                        <Row>
                                            <Col md={6}>
                                                <Form.Label>When was this vehicle first registered</Form.Label>
                                            </Col>
                                            <Col md={6}>
                                                <Form.Control  type="date" placeholder="" aria-label="Vehicle register date" aria-describedby="basic-addon1" onChange={e=>setDateVehicleRegistered(e.target.value)}/>
                                            </Col>
                                        </Row>

                                    </Form.Group>
                                </Col>
                            </Row>


                            <h2 className="section-heading">Vehicle Usage</h2>

                            <Row>


                                <Col sm={12}>
                                    <Form.Group className="mb-3" controlId="additionalDrivers">
                                        <Row>
                                            <Col md={6}>
                                                <Form.Label>How many additional drivers</Form.Label>
                                            </Col>
                                            <Col md={6}>
                                                <Form.Select onChange={e=>setAdditionalDrivers(e.target.value)}>
                                                    <option>Select additional drivers</option>
                                                    <option value="1">1</option>
                                                    <option value="2">2</option>
                                                    <option value="3">3</option>
                                                    <option value="4">4</option>
                                                </Form.Select>
                                            </Col>
                                        </Row>
                                    </Form.Group>
                                </Col>





                                <Col sm={12}>
                                    <Form.Group className="mb-3" controlId="usedCommercialPurposes">

                                        <Row>
                                            <Col md={6}>
                                                <Form.Label>Used for commerical purposes</Form.Label>
                                            </Col>

                                            <Col md={6}>
                                        <input 
                                        type="radio"
                                        name="usedCommercialPurposes"
                                        value="Yes"
                                        
                                      //  checked={usedCommercialPurposes === "Yes"}
                                        onChange={e=>setUsedCommercialPurposes(e.target.value)}>                                            
                                        </input>

                                        
                                        <Form.Label className="labelstyle">Yes</Form.Label>
                                        <input 
                                        type="radio"
                                        name="usedCommercialPurposes"
                                        value="No"
                                        
                                      //  checked={usedCommercialPurposes === "Yes"}
                                        onChange={e=>setUsedCommercialPurposes(e.target.value)}>                                            
                                        </input>
                                        <Form.Label className="labelstyle">No</Form.Label>
                                            
                                            </Col>
                                        </Row>
                                    </Form.Group>
                                </Col>
 
                                  <Col sm={12}>
                                    <Form.Group className="mb-3" controlId="usedOutsideState">

                                        <Row>
                                            <Col md={6}>
                                                <Form.Label>Used outside state</Form.Label>
                                            </Col>

                                          
                                            <Col md={6}>
                                        <input 
                                        type="radio"
                                        name="usedOutsideState"
                                        value="Yes"
                                        
                                      //  checked={usedCommercialPurposes === "Yes"}
                                        onChange={e=>setUsedOutsideState(e.target.value)}>                                            
                                        </input>
                                        <Form.Label className="labelstyle">Yes</Form.Label>
                                        <input 
                                        type="radio"
                                        name="usedOutsideState"
                                        value="No"
                                        
                                      //  checked={usedCommercialPurposes === "Yes"}
                                        onChange={e=>setUsedOutsideState(e.target.value)}>                                            
                                        </input>
                                        <Form.Label className="labelstyle">No</Form.Label>
                                            
                                            </Col>
                                        </Row>
                                    </Form.Group>
                                </Col>  

                                
                            </Row>
                            <Col sm={12}>
                            
                            <Button onClick={callMockAPI}>Submit</Button> 
            
                          
                            </Col>



                        </div>
                    </Form>
                </Container>
            </section>
        </main>
    );
  
  
                            
   
}
export default InputDetails;
