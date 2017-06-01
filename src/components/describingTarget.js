import React, { Component }  from 'react';
import {stringsFillInForm} from './strings.js';
import {TrainingPlan} from './trainingPlan.js';
import {Prompt} from 'react-router-dom';


export class DescribingTarget extends Component {
  constructor(props) {
  super(props);
  this.state = {
      isBlocking: this.props.isBlocking,
      loading: true,
      correctlyFilledForm: true,
      login: this.props.login,
      email: this.props.login,
      weight: '',
      height: '',
      trainingType: '',
      dateStart: '',
      dateEnd: '',
      style:{
        border: '4px solid black',
        width:'500px',
        height:'200px',
        display:'flex',
        justifyContent:'middle',
        flexDirection:'column'
      },
      style2:{
        border: '1px solid black'
      }
    };
} //props end



handleRegistrationData = (e) => {
  e.preventDefault();
  e.target.reset()
  this.setState({
    isBlocking: false
  })

  if(this.state.weight===""){
    alert("wypełnj piste pola")
  } else if (this.state.height===""){
    alert("wypełnj piste pola")
  } else if (this.state.trainingType===""){
    alert("wypełnj piste pola")
  } else if (this.state.date===""){
    alert("wypełnj piste pola")
  } else {
    this.setState({trainingPlanLoaded:true});
    console.log(this.state.trainingPlanLoaded);
    // fetch(`http://localhost:3000/people?name=dedeed&id=1`).then(resp => resp.json())//szukamy takich samych name i email
    //   .then(data => {
    //     console.log(data);
    //     if(data.length===0){
    //       this.state.trainingPlanLoaded=true;
    //     } else {
    //       var someAlert = "Wybrany login lub email jest już zajety";
    //     }
    //       alert(someAlert);
    //   });
  }
  console.log(this.state.weight);
  console.log(this.state.height);
  console.log(this.state.trainingType);
  console.log(this.state.date);
};
textValidationFn=()=>{


}
// function validation()
// {
//     var re = /[a-zA-Z]{3}/; // 1
//
//     if (!re.test(document.getElementById('example').value)) // 2
//     {
//         alert('Wpisz co najmniej 3 znaki');
//         return false;
//     }
//     return true;
// }

handleWeightChange=(e)=>{
  e.preventDefault();
  this.setState({
    weight: e.target.value,
    isBlocking: e.target.value.length > 0
  });
  console.log(this.state.weight);
}
handleHeightChange=(e)=>{
  e.preventDefault();
  this.setState({
    height: e.target.value,
    isBlocking: e.target.value.length > 0
  });
  console.log(this.state.height);
}
handleTrainingTypeChange=(e)=>{
  e.preventDefault();
  this.setState({
    trainingType: e.target.value,
    isBlocking: e.target.value.length > 0
  });
  console.log(this.state.trainingType);
}
handleStartDateChange=(e)=>{
  e.preventDefault();
  this.setState({
    dateStart: e.target.value,
    isBlocking: e.target.value.length > 0
  });
}
handleEndDateChange=(e)=>{
  e.preventDefault();
  this.setState({
    dateEnd: e.target.value,
    isBlocking: e.target.value.length > 0
  });
}

handleLogin=(e)=>{
  e.preventDefault();
  this.setState({
    login: e.target.value,
    isBlocking: e.target.value.length > 0
  });
  console.log(this.state.login);
}


render(){
    const { isBlocking } = this.state;
    return (
      <div>
        <Prompt
          when={isBlocking}
          message={stringsFillInForm.leavingFillInSiteWarning}
        />

          <div style={this.state.style}>
          <form onSubmit={this.handleRegistrationData}>
            <div style={this.state.style2}>
              <label>
                {stringsFillInForm.weigthFillInText}
                <input
                type="number"
                value={this.state.weight}
                onChange={this.handleWeightChange}
                placeholder="Wpisz wagę"
                min="30"
                max="150"
                pattern="[3-9]/d$"
                title="Wpisz liczbę od 30 do 150"
                required
                />
              </label>
            </div>

            <div style={this.state.style2}>
              <label>
                {stringsFillInForm.heightFillInText}
                <input type="number"
                value={this.state.height}
                onChange={this.handleHeightChange}
                placeholder="Wpisz wzrost"
                min="130"
                max="220"
                pattern="(1[0-5]0)|(1[0-4]/d)|[3-9]/d)$"
                title="Wpisz liczbę od 130 do 220"
                required
                />
              </label>
            </div>

            <div style={this.state.style2}>
              <select value={this.state.trainingType} onChange={this.handleTrainingTypeChange}>
                {stringsFillInForm.trainingTypeFillInText}
                <option value="Wyścig kolarski">Wyścig kolarski</option>
                <option value="Maraton kolarski">Maraton kolarski</option>
                <option value="Triatlon">Triatlon</option>
              </select>
            </div>

            <div style={this.state.style2}>
              <label>
                {stringsFillInForm.dateStartFillInText}
                <input type="date"
                value={this.state.date}
                onChange={this.handleStartDateChange}
                required
                />
              </label>
            </div>

            <div style={this.state.style2}>
              <label>
                {stringsFillInForm.dateFillInText}
                <input type="date"
                value={this.state.date}
                onChange={this.handleEndDateChange}
                required
                />
              </label>
            </div>

          <div style={this.state.style2}>
          </div>
        </form>
      </div>
    </div>
    )
  }//end of render
}//registration form end
