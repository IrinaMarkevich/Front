import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import NavBar from './NavBar/NavBar';
import Users from './Users/Users';
import User from './User/User';
import Auth from './Auth/Auth';
import Home from './Home/Home';
import Register from './Register/Register';
import Login from './Login/Login';
import Task from './Task/Task';
import Mission from './Mission/Mission';

class App extends Component {
  render() {
    return (
      <div>
        <NavBar/>
        <Route exact path='/' component={Home}/>
        <Route exact path='/register' component={Register}/>
        <Route exact path='/login' component={Login}/>
        <Route exact path='/user' component={Users}/>
        <Route exact path='/user/:userId' component={User}/>
        <Route exact path='/user/:userId/auth' component={Auth}/>
        <Route exact path='/mission/:missionId' component={Mission}/>
        <Route exact path='/task/:taskId' component={Task}/>
      </div>
    );
  }
}

export default App;