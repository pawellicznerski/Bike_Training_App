import React, { Component }  from 'react';
import {stringsLoginForm} from './strings.js';
import {TrainingPlan} from './trainingPlan.js';
import {Prompt} from 'react-router-dom';

export class EntryForm extends Component {
  constructor(props) {
  super(props);
  this.state = {
      login: 'Krzychu5',
      email: 'pawellicznerski@poczta.fm',
      style:{
        border: '4px solid black',
        width:'300px',
        height:'200px',
        display:'flex',
        justifyContent:'middle',
        flexDirection:'column'
      },
      style2:{
        display:'flex',
        justifyContent:'middle',
        flexDirection:'column'
      },
      style3:{
        border: '2px solid red',
        minWidth:'100px',
        minHeight:'400px',
        display:'flex',
        justifyContent:'middle',
        flexDirection:'row',
        backgroundColor:'yellow'
      },
    };
} //props end

handleRegistrationData = (e) => {
  e.preventDefault();

  if(this.state.login===""||this.state.email===""){
    alert("Żeby się zajerestrować musisz wpisać imię/login i email")
  } else {
      fetch(`http://localhost:3000/people?login=${this.state.login}&email=${this.state.email}`)
        .then(resp => {
          if (resp.ok) {
            return resp.json()
          } else {
            throw new Error('Błąd sieci!');
          }})
        .then(data => {
          if(data.length===0){
           alert("ni ma takygo kunta, sprobuj jyszczy raz");
          } else {
            const dataFromServer = data[0];
            dataFromServer.newData =false;
            this.loadingTrainingPlanEntry(dataFromServer);
          }
        }); //end of fetch
  };//end of the condition
}//end of handleRegistrationData

loadingTrainingPlanEntry=(dataFromServer)=>{
   this.props.history.push({pathname: `/nowekonto/trainingPlan/${dataFromServer.login}`,
     state: {
       login:dataFromServer.login,
       email:dataFromServer.email,
       weight:dataFromServer.weight,
       height:dataFromServer.height,
       trainingType:dataFromServer.trainingType,
       dateStart:dataFromServer.dateStart,
       dateEnd:dataFromServer.dateEnd,
       numberOfTrainingDays:dataFromServer.numberOfTrainingDays,
       newData:dataFromServer.newData,
     },
   });
} //end of loadingTrainingPlan

handleNameChange=(e)=>{
  this.setState({
    login: e.target.value,
  });
}

handleEmailChange=(e)=>{
  this.setState({
    email: e.target.value,
  });
}

returnToMenu=(e)=>{
  e.preventDefault();
  this.props.history.push('/');
}

render(){
  return (
      <div>
          <div style={this.state.style}>
            <form onSubmit={this.handleRegistrationData}>
              <div style={this.state.style2}>
                <label>
                  {stringsLoginForm.nameLoginText}
                  <input type="text"
                  value={this.state.login}
                  onChange={this.handleNameChange}
                  />
                </label>
              </div>

              <div style={this.state.style2}>
                <label>
                {stringsLoginForm.emailText}
                  <input type="text"
                  value={this.state.email}
                  onChange={this.handleEmailChange}
                  />
                </label>
              </div>

              <div style={this.state.style2}>
                <input type="submit" value="Wyświetl trening" />
              </div>
            </form>
          </div>
          <button onClick={this.returnToMenu}>{stringsLoginForm.backToMenuLoginForm}</button>
      </div>
    )
  }
}//registration form end
