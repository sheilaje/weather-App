import React from 'react';
import InputForm from './InputForm';
import Error404 from './Error404';
import appid from './../../.env';
import { Switch, Route } from 'react-router-dom';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      masterList: []
     };
     this.handleNewFormSubmission = this.handleNewFormSubmission.bind(this);
  }


  handleNewFormSubmission(requestParams){
    let url= "http://api.openweathermap.org/data/2.5/forecast?zip=" + requestParams.city + "&appid=" + process.env.REACT_APP_appid;
    fetch(url)
      .then(result => result.json())
      .then(
        (result) => {
        console.log(result);
        },
        (error) => {
          console.log(error)
        }
      )
  }

  render () {
    return(
      <div>
        <Switch>
          <Route exact path='/' render={()=><InputForm onNewFormSubmission={this.handleNewFormSubmission}/>} />
          <Route component={Error404} />
        </Switch>
      </div>
    );
  }
}

export default App;
