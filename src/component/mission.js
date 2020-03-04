import React from 'react';
import axios from 'axios';
import './mission.css';
 
export default class MissionList extends React.Component {
  state = {
    missions: [],
  }
  
  componentDidMount() {
    axios.get('http://localhost:5000/mission')
      .then(res => {
        console.log(res);
        this.setState({ missions: res.data });
      })
  }

  checkMissionResult(mission) {
    if(mission.result === 1) {
      return (
        <img src={'https://icons8.com/iconizer/files/Must_Have/orig/Check.png'} className="Mission-logo" alt="mission"/>
      );
    } else {
       return (
        <img src={'https://icons8.com/iconizer/files/Juicy_Fruit/orig/cross.png'} className="Mission-logo" alt="mission"/>
       );
    }
  }
 
  render() {
    return (
      <ul>
        {this.state.missions.map(mission => 
        <li className="Mission" key={mission.id}>
        {this.checkMissionResult(mission)}
        {mission.title}
         	
&nbsp; 	&nbsp; result: {mission.result}
        </li>)}
      </ul>
    );
  }
}