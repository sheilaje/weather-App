function ForecastListReducer(initialState = {}, action) {
    let newState;
    switch (action.type) {
        case 'GET_FORECAST':
            const newForecastWeek = action.forecastWeek.map(function(forecast)) {
                let forecastMoment = new forecastMoment(forecast.date)
                return Object.assign({}, initialState, { forecastWeek: newForecastWeek });
                return newState;

                default:
                return initialState;
            }
    }
}