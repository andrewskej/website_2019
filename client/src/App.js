import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import LoginPage from './Pages/LoginPage'
// import MainPage from './Pages/MainPage'
import ProfilePage from './Pages/ProfilePage'

class App extends Component{
  render(){
    return (
      <Router>
        <Switch>
          {/* <Route exact path = '/' component = {LoginPage}/> */}
          {/* <Route exact path = '/login' component = {LoginPage}/> */}
          {/* <Route exact path = '/main' component = {MainPage}/> */}
          {/* <Route exact path = '/profile' component = {ProfilePage}/> */}
          <Route path = '/' component = {ProfilePage}/>
        </Switch>
      </Router>
    );
  }
}

export default App;
