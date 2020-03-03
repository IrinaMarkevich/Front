import React from 'react';
import axios from 'axios';
import './user.css';
import './user.png'
 
export default class UserList extends React.Component {
  state = {
    persons: [],
  }
  
  componentDidMount() {
    axios.get('http://localhost:5000/user')
      .then(res => {
        console.log(res);
        this.setState({ persons: res.data });
      })
  }
 
  render() {
    return (
      <ul>
        {this.state.persons.map(person => 
        <li className="User" key={person.id}>
        <img src={'https://lh3.googleusercontent.com/proxy/oZOeus1v2LqBy4cUsJcD857lh5BJMGQpSu6EQhmkUO71GpfL56YhLA8NLnEBhoW5udONtbAR4SnT2rGF'} className="User-logo" alt="user"/>
        {person.name}
        <p>id: {person.id}</p>
        </li>)}
      </ul>
    );
  }
}