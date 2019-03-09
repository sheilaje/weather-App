import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { HashRouter } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import ForecastListReducer from './reducers/ForecastListReducer';

const store = createStore(ForecastListReducer);

const render = (Component) => {
  ReactDOM.render(
      <HashRouter>
        <Provider store={store}>
          <Component />
        </Provider> 
      </HashRouter>,
    document.getElementById('react-app-root')
  );
};

render(App);
