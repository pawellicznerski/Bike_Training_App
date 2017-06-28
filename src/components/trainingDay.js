import React, { Component } from 'react';
import { BrowserRouter as Router,Route,Link,NavLink, Switch } from 'react-router-dom';
import { Prompt } from 'react-router-dom';
import { SaveInfo } from './saveInfo';

export class TrainingDay extends Component {
  constructor(props) {
  super(props);
  this.state = {
      isBlocking: false,
      saveInfo: false,
    };
  } //props end


renderTrDay=(arr)=> {
  return (
    <div className="comment" key={arr[0]}>
    {arr[0]}{arr[1]}{arr[2]}{arr[3]}{arr[4]}{arr[5]}{arr[6]}
    </div>
  )
}

loadPDF=()=>{
   this.props.history.push({pathname: `/nowekonto/trainingPlan/${this.props.state.login}/PDF`,
     state: {
       login:this.state.login,
       email:this.state.email,
       weight:this.state.weight,
       height:this.state.height,
       trainingType:this.state.trainingType,
       dateStart:this.state.dateStart,
       dateEnd:this.state.dateEnd,
       numberOfTrainingDays:this.state.numberOfTrainingDays,
     },
   });
} //end of loadingTrainingPlan

saveAccount=()=>{
  const newMember = this.props.state;
  const nameOfnewMember = this.props.state.login;
  fetch(`http://localhost:3000/people?login=${nameOfnewMember}`).then(resp => resp.json())
    .then(data => {
      if(data.length!==0){
        console.log("blokuje:)");
        this.setState({
          isBlocking:true,
        })
      } else if (data.length===0){
        this.setState({
          saveInfo:true,
        })
        fetch(`http://localhost:3000/people`, {
                method : 'POST',
                headers: {
                    'Content-Type': 'application/json'
                  },
                body: JSON.stringify(newMember)
            });
      }
    });

} //end of loadingTrainingPlan

closeSaveInfoAndIsblock=()=>{
  this.setState({
    saveInfo:false,
    isBlocking:false,
  })
}

render() {
  return (
    <Router>
      <div className="App">
        <Prompt when={this.state.isBlocking} message={"Jeżeli wyjdziesz wszystkie pola zostana utracone?"}/>
        <SaveInfo saveInfo={this.state.saveInfo} isBlocking={this.state.isBlocking} closeSaveInfoAndIsblock={this.closeSaveInfoAndIsblock}></SaveInfo>
        <button onClick={this.saveAccount}>Zapisz</button>
        <button onClick={this.loadPDF}>PDF</button>
        {this.props.trainingPlanArr.map(arr=>this.renderTrDay(arr))}
      </div>
    </Router>
  );
}

}//end of App
