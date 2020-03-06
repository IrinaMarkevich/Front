import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

class  Missions extends Component {
  constructor(props) {
    super(props);

    this.state = {
       mission: null,
    };
  }

  async componentDidMount() {
    const { match: { params } } = this.props;
    const mission = (await axios.get(`http://localhost:5000/mission/${params.missionId}`)).data[0];

    this.setState({
      mission
    });
  }

  render() {
    const {mission} = this.state;
    console.log(mission);
    if (mission === null) return <p>Loading ...</p>;
    return (

      <div className="container">
         {/* <Link to={`/user/${user.id}/auth`}>
           <div className="card text-white bg-success mb-3">
             <div className="card-header">Auth</div>
           </div>
         </Link> */}

        <div className="row">
          <div className="jumbotron col-12">
            <h1 className="display-3">{mission.title}</h1>
            <p className="lead">Status: {mission.status}</p>
            <p className="lead">Result: {mission.result}</p>
            <p className="lead">Time: {mission.time}</p>
            <hr className="my-4" />
            <p className="card-title">Tasks:</p>
            {
              
              mission.tasks.map((task) => (
                  <div key={task.id} className="card border-primary mb-3" style={{'maxWidth': '20rem'}}>
                    <Link to={`/task/${task.id}`} >
                    <div className="card-header"><h4 className="card-title">{task.title}</h4></div>
                    </Link>
                    <div className="card-body">
                      <p className="card-title">Result task: {task.result}</p>

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

export default  Missions;