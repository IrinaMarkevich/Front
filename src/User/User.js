import React, {Component} from 'react';
import axios from 'axios';

class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
    };
  }

  async componentDidMount() {
    const { match: { params } } = this.props;
    const user = (await axios.get(`http://localhost:5000/user/${params.userId}`)).data;
    this.setState({
      user
    });
  }

  render() {
    const {user} = this.state;
    if (user === null) return <p>Loading ...</p>;
    return (
      <div className="container">
        <div className="row">
          <div className="jumbotron col-12">
            <h1 className="display-3">{user.email}</h1>
            <p className="lead">{user.gender}</p>
            <hr className="my-4" />
            <p>Missions:</p>
            {
            //   user.missions.map((mission) => (
            //     <p className="lead" key={mission.id}>{mission.title}</p>
            //   ))
            }
          </div>
        </div>
      </div>
    )
  }
}

export default User;
