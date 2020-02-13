import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ProfilePage from './Pages/ProfilePage'

class App extends Component{
  render(){
    return (
      <Router>
        <Switch>
          <Route path = '/' component = {ProfilePage}/>
        </Switch>
      </Router>
    );
  }
}

export default App;
