import React from 'react';
import PropTypes from 'prop-types';
import './assets/styles/styles.css';
// import Form from 'react-bootstrap/Form';
// import Button from 'react-bootstrap/Button';

function InputForm(props){

  let _city=null;
  let _country=null;

  function handleNewFormSubmission(event){
    event.preventDefault();
    props.onNewFormSubmission({city: _city.value, country: _country.value});
    _city.value='';
    _country.value='';
  }
  return(

    <div className='weatherContainer'>

      <p className="formHeading" for="">Find out the Weather !!</p> <br></br>


        <form onSubmit={handleNewFormSubmission}>
            <input type='text'
              id='city'
              placeholder='type the city'
              ref={(input) => {_city = input;}}/>

              <input type='text'
                id='country'
                placeholder='type the country'
                ref={(input) => {_country = input;}}/>

              <button type='submit'> Get the weather </button>

        </form>


    </div>
  );
}

InputForm.propTypes = {
  onNewFormSubmission: PropTypes.func
};

export default InputForm;
