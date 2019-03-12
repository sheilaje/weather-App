import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createForecastAction } from './actions';
import './assets/styles/styles.css';

function InputForm({ dispatch }){

  let _city=null;

  function getForecast(event){
    event.preventDefault();
    let city=_city.value;
    dispatch(createForecastAction(city));
  }

  return (
    <div className='weatherBlock'>
      <div id='input'></div>
      <input type='text'
        className='input'
        ref={(input)=>{_city=input;}}
        placeholder='city'/>

      <button type='button' onClick={getForecast} className='btn' > Get Forecast </button>
    </div>
  );
}

InputForm.props={
  dispatch: PropTypes.func
};

export default connect()(InputForm);
