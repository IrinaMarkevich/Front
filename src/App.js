import React, { Component } from 'react';
import './App.css';
import logo from './logo.svg';
import UserList from './component/userList';
import MissionList from './component/mission';
import AddUser from './component/addUser';
import './component/addUser.css';
import { BrowserRouter, Route } from "react-router-dom";


class Home extends Component {
  render() {
    return  (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <h1 className="App-title">Welcome to React</h1>

        </header>

        <p>
        <UserList />
        </p>
      </div>
    );
  }  
}

class Mission extends Component {
  render() {
    return  (
      <div className="App">
        <p>
        <MissionList />
        </p>
      </div>
    );
  }  
}

class Auth extends Component {
  render() {
    return  (
      <div className="AddUser">
        <p>
        <AddUser />
        </p>
      </div>
    );
  }  
}

const App = () => <div className="App">
  <BrowserRouter>
    <div>
      <Route exact path="/" component={Home} />
      <Route exact path="/auth" component={Auth} />
      <Route exact path="/mission" component={Mission} />
    </div>
  </BrowserRouter>
</div>;

export default App;
