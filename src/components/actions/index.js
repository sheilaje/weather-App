import * as types from './../constants/ActionTypes';

export const getForecast = (forecastWeek)=>({
  type: types.GET_FORECAST,
  forecastWeek: forecastWeek
});

export function createForecastAction(city){
  return function(dispatch){
    return fetch(`http://api.apixu.com/v1/forecast.json?key=0ad69ecb045c4297a0e52409190603&q=${city}&days=7`).then(
      response => response.json(),
      error => console.log('An error occured', error))
      .then ((response)=> {
        console.log('response', response);
        console.log('response', response.forecast.forecastday);
        const forecastWeek = response.forecast.forecastday;
        console.log('forecastWeek', forecastWeek);
        dispatch(getForecast(forecastWeek));
      });
  };
}
