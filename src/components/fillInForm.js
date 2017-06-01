import React, { Component }  from 'react';
import { stringsFillInForm } from './strings.js';
import { TrainingPlan } from './trainingPlan.js';
import { DescribingTarget } from './describingTarget.js';
import { Prompt } from 'react-router-dom';
import { BrowserRouter as Router,Route,Link,NavLink, Switch } from 'react-router-dom';


export class FillInForm extends Component {
  constructor(props) {
  super(props);
  this.state = {
      isBlocking: false,
      loading: true,
      describingTargetLoaded: false,
      login: '',
      onBlurLoginWarning:'',
      email: '',
      onBlurEmailWarning:'',
      weight: '',
      onBlurweightWarning:'',
      height: '',
      onBlurheightWarning:'',
      trainingType: '',
      onBlurtrainingTypeWarning:'',
      dateStart: '',
      onBlurdateStartWarning:'',
      dateEnd: '',
      onBlurdateEndWarning:'',
      style:{
        border: '4px solid black',
        minWidth:'100px',
        minHeight:'400px',
        display:'flex',
        justifyContent:'middle',
        flexDirection:'column'
      },
      style2:{
        border: '1px solid black'
      }
    };
    this.returnToMenu = this.returnToMenu.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
} //props end



handleRegistrationData = (e) => {
  e.preventDefault();
  this.setState({
    isBlocking: false,
  })

  if(this.state.login===""){
    this.setState({
      onBlurLoginWarning: "Wpisz prawidłowy login",
    })
  } else if (this.state.email===""){
    this.setState({
      onBlurEmailWarning: "Wpisz swój e-mail",
    })
  } else if(this.state.weight===""){
    this.setState({
      onBlurweightWarning:'Wpisz swoją wagę',
    })
  } else if (this.state.height===""){
    this.setState({
      onBlurheightWarning:'Wpisz swój wzrost',
    })
  } else if (this.state.trainingType===""){
    this.setState({
      onBlurtrainingTypeWarning:'Wybierz docelowy dystans',
    })
  } else if (this.state.dateStart===""){
    this.setState({
      onBlurdateStartWarning:'Wybierz datę rozpoczęcia przygotowań',
    })
  } else if (this.state.dateEnd===""){
    this.setState({
      onBlurdateEndWarning:'Wybierz datę celu',
    })
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
};

handleOnBlurLogin =(e)=>{
  e.preventDefault();

  console.log("blur login dziala");
  console.log(this.state.login);

  if(this.state.login===""){
    this.setState({
      onBlurLoginWarning: "Wpisz prawidłowy login",
    })
    console.log("zalapal if login");
    return false;
  } else if (!/(?=.*\d)(?=.*[A-Za-z]).{4,15}/.test(this.state.login)) {
    this.setState({
      isBlocking: true,
      onBlurLoginWarning: "Login musi zawierać między 4 a 15 znaków, chociaż jedną literę i liczbę",
    })
    return false;
  } else {
    this.setState({
      onBlurLoginWarning: "",
    })
    fetch(`http://localhost:3000/people?name=${this.state.login}`).then(resp => resp.json())
      .then(data => {
        if(data.length===0){
          console.log("nie ma w bazie");
        } else if (data.length!==0){
          console.log("jest w bazie");
        }
      });
  }
}

handleOnBlurEmail =(e)=>{
  e.preventDefault();

  console.log("blur login dziala");
  console.log(this.state.login);

  if(this.state.email===""){
    this.setState({
      onBlurEmailWarning: "Wpisz swój e-mail",
    })
  } else if (!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(this.state.email)) {
    this.setState({
      isBlocking: true,
      onBlurEmailWarning: "Wpisz prawidłowy adres e-mail",
    })
  } else {
    this.setState({
      onBlurEmailWarning: "",
    })
    fetch(`http://localhost:3000/people?email=${this.state.email}`).then(resp => resp.json())
      .then(data => {
        if(data.length!==0){
          this.setState({
            onBlurEmailWarning:'Wybrany login już isnieje',
          })
        } else if (data.length===0){
          this.setState({
            onBlurEmailWarning:'Wybrany email nie isnieje - mozna uzyć',
          })
        }
      });//then
  }//else
}//if

handleInputChange =(event)=>{
  const target = event.target;
  const value = target.type === 'checkbox' ? target.checked : target.value;
  const name = target.name;
  const nameString = name.toString();
  const nameWarning = `onBlur${nameString}Warning`;

  this.setState({
     [name]: value,
     [nameWarning]:'',
     isBlocking: event.target.value.length > 0,
   });
}

returnToMenu=(e)=>{
  e.preventDefault();
  this.props.history.push('/');
}

// validateForm=(values)=>{
//   const errors = {};
//   if (!values.weight){
//     errors.weight = {"Wprowadź swoją wagę"}
//   }
// }

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
                {stringsFillInForm.loginFillInText}
                <input
                  type="text"
                  value={this.state.login}
                  placeholder="Wpisz imie"
                  onChange={this.handleInputChange}
                  onBlur={this.handleOnBlurLogin}
                  onFocus={this.handleOnFocusLogin}
                  name="login"
                />
              </label>
              <p>{this.state.onBlurLoginWarning}</p>
            </div>

            <div style={this.state.style2}>
              <label>
                {stringsFillInForm.emailFillInText}
                <input
                  type="text"
                  value={this.state.email}
                  placeholder="Wpisz swój e-mail"
                  onChange={this.handleInputChange}
                  onBlur={this.handleOnBlurEmail}
                  onFocus={this.handleOnFocusEmail}
                  name="email"
                />
              </label>
              <p>{this.state.onBlurEmailWarning}</p>
            </div>

            <div style={this.state.style2}>
              <label>
                {stringsFillInForm.weigthFillInText}
                <input
                  type="number"
                  value={this.state.weight}
                  onChange={this.handleInputChange}
                  placeholder="Wpisz wagę"
                  min="30"
                  max="150"
                  pattern="[3-9]/d$"
                  title="Wpisz liczbę od 30 do 150"
                  name="weight"
                />
              </label>
              <p>{this.state.onBlurweightWarning}</p>
            </div>

            <div style={this.state.style2}>
              <label>
                {stringsFillInForm.heightFillInText}
                <input
                  type="number"
                  value={this.state.height}
                  onChange={this.handleInputChange}
                  placeholder="Wpisz wzrost"
                  min="130"
                  max="220"
                  pattern="(1[0-5]0)|(1[0-4]/d)|[3-9]/d)$"
                  title="Wpisz liczbę od 130 do 220"
                  name="height"
                />
              </label>
              <p>{this.state.onBlurheightWarning}</p>
            </div>

            <div style={this.state.style2}>
              <select
                value={this.state.trainingType}
                onChange={this.handleInputChange}
                name="trainingType"
                >
                {stringsFillInForm.trainingTypeFillInText}
                <option value="Wyścig kolarski">Wyścig kolarski</option>
                <option value="Maraton kolarski">Maraton kolarski</option>
                <option value="Triatlon">Triatlon</option>
              </select>
              <p>{this.state.onBlurtrainingTypeWarning}</p>
            </div>

            <div style={this.state.style2}>
              <label>
                {stringsFillInForm.dateStartFillInText}
                <input
                type="date"
                value={this.state.dateStart}
                onChange={this.handleInputChange}
                name="dateStart"
                />
              </label>
              <p>{this.state.onBlurdateStartWarning}</p>
            </div>

            <div style={this.state.style2}>
              <label>
                {stringsFillInForm.dateFillInText}
                <input
                type="date"
                value={this.state.endDate}
                onChange={this.handleInputChange}
                name="dateEnd"
                />
              </label>
              <p>{this.state.onBlurdateEndWarning}</p>
            </div>

            <input type="submit" value={stringsFillInForm.inputSubmitValue} />

          </form>
          </div>
          <button onClick={this.returnToMenu}>{stringsFillInForm.backToMenuFillInForm}</button>
      </div>
    )
  }//end of render
}//registration form end
