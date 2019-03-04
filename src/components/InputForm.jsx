import React from 'react';
import './assets/styles/styles.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function InputForm(){
  return(
     
    <div className='weatherContainer'>

      <p className="formHeading" for="">Find out the Weather !!</p> <br></br>
      <Form className="gridStyles">

        {/* <p className="formHeading" for="">Find out the Weather !!</p> <br></br> */}

        <Form.Group controlId="formBasicCity" classname="cityTextStyle">        
          <Form.Label className="labelText">City</Form.Label>
          <Form.Control type="text" placeholder="Enter city" className="city"/>
          <Form.Text className="text-muted">
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicCountry" classname="cityTextStyle">
          <Form.Label className="labelText">Country</Form.Label>
          <Form.Control type="text" placeholder="Enter country"  className="city"/>
          <Form.Text className="text-muted">
          </Form.Text>
        </Form.Group>

       
        <Button className ="btn" variant="warning">Get the Weather</Button>
       
        
      </Form>
    </div>
  );
}

export default InputForm;