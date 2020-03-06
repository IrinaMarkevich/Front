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
                
                  <div key={mission.id} className="card border-primary mb-3" style={{'maxWidth': '20rem'}}>
                    <Link to={`/mission/${mission.id}`} >
                    <div className="card-header card-title"> <h1>{mission.title}</h1></div>
                    </Link>
                    <div className="card-body">
                      <h4 className="card-title"><p>Result: {mission.result}</p></h4>
                      {/* <p className="card-text">{user.email}</p>
                      <p className="card-text">{user.gender}</p>
                      <p className="card-text">{user.age}</p> */}
                    </div>
                  </div>
              ))
            }
          </div>
        </div>
      </div>
    )
  }
}

export default User;
