import React from 'react';
import InputForm from './InputForm';
import Error404 from './Error404';
import { Switch, Route } from 'react-router-dom';

function App(){
  return(
    <div>
      {/* <InputForm/> */}
      <Switch>
        <Route exact path='/' component={InputForm} />
        <Route component={Error404} />
      </Switch>
    </div>
  );
}

export default App;

