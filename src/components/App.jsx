import React, { Component } from 'react';
import { createForecastAction } from './actions';
import './assets/styles/styles.css';
// import ForecastListReducer from '../reducers';
import { connect } from 'react-redux';
import WeatherList from './WeatherList';
import InputForm from './InputForm';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {};
  }

  render() {
    if(!this.props.forecastWeek){
      return (
        <div className='weatherContainer'>
          <InputForm />
        </div>
      )
    } else {
      return (
        <div>
          <InputForm />
          <WeatherList  forecastList = {this.props.forecastWeek}/>
        </div>
      )
    }
  }
}

const mapStateToProps = state => {
  return {
    forecastWeek: state.forecastWeek
  }
}

export default connect(mapStateToProps)(App);
