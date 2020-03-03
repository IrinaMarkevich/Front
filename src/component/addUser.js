import React from 'react';
import axios from 'axios';
import './addUser.css';
 
export default class AddUser extends React.Component {
  state = {
    id: '',
    name: '',
    password:'',
    email: '',
    gender: '',
    age: Number
  }
  
  handleChange = event => {
    const target = event.target;
    const value = target.type === 'text' || target.type === 'number' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
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
      }

      axios.post('http://localhost:5000/user', {user})
      .then(res => {
          console.log(res);
      });
  }
 
  render() {
    return (
        <form onSubmit={this.handleSubmit}>
            <p>
                <label>
                    id:&nbsp;
                    <input type="text" id ="id" onChange={this.handleChange} />
                </label>
            </p>

            <p>
                 <label>
                      name:&nbsp;
                     <input type="text" name ="name" onChange={this.handleChange} />
                 </label>
            </p>

            <p>
                 <label>
                      password:&nbsp;
                     <input type="password" password ="password" onChange={this.handleChange} />
                 </label>
            </p>

            <p>
                 <label>
                 email:&nbsp;
                     <input type="text" email ="email" onChange={this.handleChange} />
                 </label>
            </p>

            <p>
                 <label>
                 gender:&nbsp;
                     <select value={this.state.value} onChange={this.handleChange}>
                         <option value="m">male</option>
                         <option value="f">female</option>
                    </select>
                 </label>
            </p>

            <p>
                 <label>
                 age:&nbsp;
                     <input type="number" age ="age" onChange={this.handleChange} />
                 </label>
            </p>
            
            <p>
                 <input type="submit" value ="add" />
            </p>
         
        </form>
    );
  }
}