import React, {Component} from 'react';
import axios from 'axios';

class Users extends Component {
  constructor(props) {
    super(props);

    this.state = {
      auth: null
    };
  }

  async componentDidMount() {
    const { match: { params } } = this.props;
    const user = (await axios.get(`http://localhost:5000/user/${params.userId}`)).data[0];
    const auth = (await axios.post(`http://localhost:5000/auth/login`, user)).data;
    console.log(auth);
    this.setState({
      auth
    });
  }

  render() {
    const {auth} = this.state;
    if (auth === null) return <p>Loading token ...</p>;
    return (
      <div className="container">
        <div className="row">
          <div className="jumbotron col-12">
            <h1 className="display-3">{auth.access_token}</h1>
          </div>
        </div>
      </div>
    )
  }
}

export default Users;