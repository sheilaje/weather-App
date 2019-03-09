import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { AppContainer } from 'react-hot-loader';
import { HashRouter } from 'react-router-dom';
import { createStore } from 'redux';

const store = createStore(ForecastListReducer);

const render = (Component) => {
  ReactDOM.render(
    
      <HashRouter>
        <Provider store = {store}>
        <Component />
        </Provider>
      </HashRouter>,
    document.getElementById('react-app-root')
  );
};

render(App);
