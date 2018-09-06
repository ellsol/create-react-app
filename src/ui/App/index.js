import React, { Component } from 'react';
import Navigation from '../Navigation';
import {Route, Switch, withRouter, Redirect} from "react-router-dom";
import PageOne from '../Page1';
import PageTwo from '../Page2';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation/>
        <Switch>
          <Route exact path="/" render={() => (<PageOne/>)}/>
          <Route path="/detail" render={(props) => (<PageTwo {...props}/>)}/>
        </Switch>
      </div>
    );
  }
}

export default App;
