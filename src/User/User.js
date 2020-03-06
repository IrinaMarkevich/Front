import React, {Component} from 'react';
import {Link} from 'react-router-dom';
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
    const user = (await axios.get(`http://localhost:5000/user/${params.userId}`)).data[0];
    this.setState({
      user
    });
  }

  render() {
    const {user} = this.state;
    if (user === null) return <p>Loading ...</p>;
    return (

      <div className="container">
         {/* <Link to={`/user/${user.id}/auth`}>
           <div className="card text-white bg-success mb-3">
             <div className="card-header">Auth</div>
           </div>
         </Link> */}

        <div className="row">
          <div className="jumbotron col-12">
            <h1 className="display-3">{user.name}</h1>
            <p className="lead">{user.email}</p>
            <hr className="my-4" />
            <p>Missions:</p>
            {
              
              user.missions.map((mission) => (
                <p className="lead" key={mission.id}>{mission.title}</p>
              ))
            }
          </div>
        </div>
      </div>
    )
  }
}

export default User;
