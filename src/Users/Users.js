import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

class Users extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: null,
    };
  }

  async componentDidMount() {
    const users = (await axios.get('http://localhost:5000/user')).data;
    this.setState({
      users,
    });
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          {this.state.users === null && <p>Loading users...</p>}
          {
            this.state.users && this.state.users.map(user => (
              <div key={user.id} className="col-sm-12 col-md-4 col-lg-3">
                <Link to={`/user/${user.id}`}>
                  <div className="card text-white bg-success mb-3">
                    <div className="card-header">Id: {user.id}</div>
                    <div className="card-body">
                      <h4 className="card-title">{user.name}</h4>
                      {/* <p className="card-text">{user.email}</p>
                      <p className="card-text">{user.gender}</p>
                      <p className="card-text">{user.age}</p> */}
                    </div>
                  </div>
                </Link>
              </div>
            ))
          }
        </div>
      </div>
    )
  }
}

export default Users;