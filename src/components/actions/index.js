import forecastCall from '../../api';

function createForecastAction() {
    const apiResult = forecastCall();
    return apiResult.then((forecastResponse) => {
        return ({
            type: 'GET_FORECAST',
            forecastWeek: forecastResponse.forecast.forecastday
        })
    })
}

export { createForecastAction }