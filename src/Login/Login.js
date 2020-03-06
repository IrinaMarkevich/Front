import React from 'react';
import {Link} from 'react-router-dom';
// import {Route} from 'react-router-dom';
import axios from 'axios';
// import User from '../User/User';

export default class Register extends React.Component {
    state = {
      id: '',
      name: '',
      password: '',
      email: '',
      gender: '',
      age: Number,
      status: null
    }
  
    handleChangeId = event => {
      this.setState({ id: event.target.value });
    }

    handleChangeName = event => {
        this.setState({ name: event.target.value});
    }

    handleChangePassword = event => {
        this.setState({  password: event.target.value });
    }

    handleChangeEmail = event => {
        this.setState({  email: event.target.value });
    }

    handleChangeGender = event => {
        this.setState({  gender: event.target.value });
    }

    handleChangeAge = event => {
        let valueAge = +event.target.value
        this.setState({  age: valueAge});
    }

    handleSubmit = event => {
      event.preventDefault();
  
      const user = {
        id: this.state.id,
        password: this.state.password,
      };
      console.log(user);
      axios.post('http://localhost:5000/auth/login',  user)
        .then(res => {
          this.setState({  status: res.status});
          console.log(res);
          console.log(res.data);
          return {
              
          }
        })
    }
  
    render() {
    const status = this.state.status;
    const id = this.state.id;
      return (
        <div className="form-group  col-sm-2">
          <form onSubmit={this.handleSubmit}>
             <label >Enter id:</label>
             <input type="text" className="form-control"  placeholder="id" onChange={this.handleChangeId}/>
          </form>

         <form onSubmit={this.handleSubmit}>
             <label >Enter your password:</label>
             <input type="password" className="form-control"  placeholder="Password" onChange={this.handleChangePassword}/>
        
             <small id="" className="form-text text-muted"></small>
             
             <Link to={`/user/${id}`}>
             <button type="submit" className="btn btn-primary"> Submit
             <div >
              {
                status !== null &&
                <button type="button" class="btn btn-outline-success">Success</button>
                
              } 
          </div>
             </button>
             </Link>
          </form>

        </div>

        
      )
    }
}