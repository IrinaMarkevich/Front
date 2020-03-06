import React from 'react';
// import {Link} from 'react-router-dom';
import axios from 'axios';

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
        name: this.state.name,
        password: this.state.password,
        email: this.state.email,
        gender: this.state.gender,
        age: this.state.age
      };
      console.log(user);
      axios.post('http://localhost:5000/auth/register',  user)
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
      return (
        <div className="form-group  col-sm-2">
          <form onSubmit={this.handleSubmit}>
             <label >Enter id:</label>
             <input type="text" className="form-control"  placeholder="id" onChange={this.handleChangeId}/>
          </form>
          <form onSubmit={this.handleSubmit}>
             <label >Enter your name:</label>
             <input type="text" className="form-control"  placeholder="Name" onChange={this.handleChangeName}/>
             </form>
         <form onSubmit={this.handleSubmit}>
             <label >Enter your password:</label>
             <input type="password" className="form-control"  placeholder="Password" onChange={this.handleChangePassword}/>
             </form>
         <form onSubmit={this.handleSubmit}>
             <label >Enter your email:</label>
             <input type="text" className="form-control"  placeholder="Email" onChange={this.handleChangeEmail}/>
             </form>
         <form onSubmit={this.handleSubmit}>
             <label >Enter your gender m/f:</label>
             <input type="text" className="form-control"  placeholder="gender" onChange={this.handleChangeGender}/>
             </form>
         <form onSubmit={this.handleSubmit}>
             <label >Enter age:</label>
             <input type="number" className="form-control"  placeholder="age" min="1" onChange={this.handleChangeAge}/>
             
             <small id="" className="form-text text-muted"></small>
             <button type="submit" className="btn btn-primary"> Submit</button>
          </form>
        
          <div >
              {
                status === 201 &&
                 <div className="alert alert-dismissible alert-success"> <strong>Well done!</strong> You successfully read <a href="/login" className="alert-link">this important alert message</a> </div>
              } 
          </div>

        </div>

        
      )
    }
}