import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createForecastAction } from '../actions';
import './assets/styles/styles.css';

function InputForm({ dispatch }){


return (
<div>
<input type='text'
       id='city'
       ref={(input)=>{_city=input;}}
       placeholder='city'/>
<button type='button' onClick={getForecast} className='btn'> Get Forecast </button>
</div>
)
}

InputForm.props={
dispatch: PropTypes.func
}

export default connect()(InputForm);
