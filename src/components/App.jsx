import React, { Component } from 'react';
import { createForecastAction } from './actions';
// import ForecastListReducer from '../reducers';
import { connect } from 'react-redux';

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
        <div>
          <button onClick={this.getForecast}>get weather</button>
        </div>
      )
    } else {
      return (
        <div>
          Got it
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

