import React, { Component } from 'react';
// import { createForecastAction } from './actions';
import './assets/styles/styles.css';
import PropTypes from 'prop-types';
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
      );
    } else {
      return (
        <div>
          <InputForm />
          <WeatherList  forecastList = {this.props.forecastWeek}/>
        </div>
      );
    }
  }
}

App.propTypes={
  forecastWeek: PropTypes.array
};

const mapStateToProps = state => {
  return {
    forecastWeek: state.forecastWeek
  };
};

export default connect(mapStateToProps)(App);
