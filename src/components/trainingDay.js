import React, { Component } from 'react';
import { Prompt } from 'react-router-dom';
import { SaveInfo } from './saveInfo';

export class TrainingDay extends Component {
  constructor(props) {
  super(props);
  this.state = {
      isBlocking: false,
      isBlockingRemove: false,
      saveInfo: false,
      removeInfo: false,
      dataId: '',
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
       login:this.props.state.login,
       email:this.props.state.email,
       weight:this.props.state.weight,
       height:this.props.state.height,
       trainingType:this.props.state.trainingType,
       dateStart:this.props.state.dateStart,
       dateEnd:this.props.state.dateEnd,
       numberOfTrainingDays:this.props.state.numberOfTrainingDays,
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
                    'Content-Type': 'application/json',
                    'X-My-Header' : 'test'
                  },
                body: JSON.stringify(newMember)
            });
      }
    });
} //end of saveAccount

removeAccount=()=>{
  const newMember = this.props.state;
  const nameOfnewMember = this.props.state.login;
  fetch(`http://localhost:3000/people?login=${nameOfnewMember}`).then(resp => resp.json())
    .then(data => {
      if(data.length!==0){
        const dataId=data[0].id;
        console.log(dataId);
        this.setState({
          removeInfo:true,
          isBlockingRemove:true,
          dataId:dataId,
        })
      } else if(data.length===0){
        alert("dane nie są zapisane")
        this.setState({
          removeDeniedInfo:true,
        })
      }
    });
} //end of removeAccount

removeAccountCondition=()=>{
  fetch(`http://localhost:3000/people/${this.state.dataId}`, {
          method : 'DELETE',
      });
    this.setState({
      isBlockingRemove:false,
    })
}

closeSaveInfoAndIsblock=()=>{
  this.setState({
    saveInfo:false,
    isBlocking:false,
    removeInfo:false,
    isBlockingRemove:false,
  })
}

render() {
  return (
      <div className="App">
        <SaveInfo {...this.state} closeSaveInfoAndIsblock={this.closeSaveInfoAndIsblock} removeAccountCondition={this.removeAccountCondition}></SaveInfo>
        <button onClick={this.saveAccount}>Zapisz</button>
        <button onClick={this.removeAccount}>Usuń konto</button>
        <button onClick={this.loadPDF}>PDF</button>
        <p>Plan treningowy użytkownika: {this.props.state.login}</p>
        {this.props.bmiTip}
        {this.props.trainingPlanArr.map(arr=>this.renderTrDay(arr))}
      </div>
  );
}

}//end of App
