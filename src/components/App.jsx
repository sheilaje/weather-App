import React, { Component } from 'react';
import { createForecastAction } from './actions';
import './assets/styles/styles.css';
// import ForecastListReducer from '../reducers';
import { connect } from 'react-redux';
import WeatherList from './WeatherList';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {};
    this.getForecast = this.getForecast.bind(this);
  }

  getForecast(){
    const { dispatch } = this.props;
    let forecastPromise = createForecastAction();
    forecastPromise.then((getForecastAction)=>{
      return dispatch(getForecastAction);
    })
  }

  render() {
    if(!this.props.forecastWeek){
      return (
        <div className='weatherContainer'>
          <button onClick={this.getForecast}>get weather</button>
        </div>
      )
    } else {
      return (
        <div>
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

