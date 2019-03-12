import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { createStore, applyMiddleware } from 'redux';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import middlewareLogger from './middleware/middleware-logger';
import ForecastListReducer from './reducers/ForecastListReducer';
import thunkMiddleware from 'redux-thunk';

const store = createStore(ForecastListReducer, applyMiddleware(middlewareLogger,
thunkMiddleware));


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
let unsubscribe = store.subscribe(()=>{
  console.log('subscription', store.getState());
})
