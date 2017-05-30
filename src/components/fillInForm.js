import React, { Component }  from 'react';
import {stringsFillInForm} from './strings.js';
import {TrainingPlan} from './trainingPlan.js';
import {DescribingTarget} from './describingTarget.js';
import {Prompt} from 'react-router-dom';
import { BrowserRouter as Router,Route,Link,NavLink, Switch } from 'react-router-dom';


export class FillInForm extends Component {
  constructor(props) {
  super(props);
  this.state = {
      isBlocking: false,
      loading: true,
      describingTargetLoaded: false,
      login: '',
      email: '',
      onBlurLoginWarning:'',
      onBlurEmailWarning:'',
      style:{
        border: '4px solid black',
        width:'500px',
        height:'400px',
        display:'flex',
        justifyContent:'middle',
        flexDirection:'column'
      },
      style2:{
        border: '1px solid black'
      }
    };
    this.returnToMenu = this.returnToMenu.bind(this);
} //props end



handleRegistrationData = (e) => {
  e.preventDefault();
  e.target.reset()
  this.setState({
    isBlocking: false,
    describingTargetLoaded:true
  })
};

// describingTargetLoaded = (e) => {
//   e.preventDefault();
// };

handleOnBlurLogin =(e)=>{
  e.preventDefault();

  console.log("blur login dziala");
  console.log(this.state.login);
  if(this.state.login===""){
    this.setState({
      onBlurLoginWarning: "wypełnj piste pola chamie",
    })
    console.log("zalapal if login");
    return false;
  } else if (!/(?=.*\d)(?=.*[A-Za-z]).{4,15}/.test(this.state.login)) {
    this.setState({
      isBlocking: true > 0,
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

handleOnFocusLogin=(e)=>{
  e.preventDefault();
  this.setState({
  })
}

handleOnBlurEmail =(e)=>{
  e.preventDefault();

  if(this.state.email===""){
    this.setState({
      onBlurEmailWarning: "wypełnj piste pola chamie",
    })
  } else if (!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(this.state.email)) {
    this.setState({
      isBlocking: true > 0,
      onBlurEmailWarning: "Wpisz prawidłowy adres e-mail",
    })
  } else {
    this.setState({
      onBlurEmailWarning: "",
    })
    fetch(`http://localhost:3000/people?name=${this.state.email}`).then(resp => resp.json())
      .then(data => {
        console.log(data);
        if(data.length===0){
          this.setState({
            onBlurLoginWarning:'Wybrany login już isnieje',
          })
        } else if (data.length!==0){

        }
    });
  }//else
}//if

handleOnFocusEmail=(e)=>{
  e.preventDefault();
  this.setState({
  })
}




handleEmailChange=(e)=>{
  e.preventDefault();
  this.setState({
    email: e.target.value,
    isBlocking: e.target.value.length > 0
  });
}

handleLogin=(e)=>{
  e.preventDefault();
  this.setState({
    login: e.target.value,
    isBlocking: e.target.value.length > 0
  });
}

returnToMenu=(e)=>{
  e.preventDefault();
  this.props.history.push('/');
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

              <div
                 style={this.state.style2}
                 onBlur={this.handleOnBlurLogin}
                 onFocus={this.handleOnFocusLogin}

                 >
                <p>{this.state.onBlurLoginWarning}</p>
                <label>
                  {stringsFillInForm.loginFillInText}
                  <input type="text"
                  value={this.state.login}
                  placeholder="Wpisz imie"
                  required
                  onChange={this.handleLogin}
                  />
                </label>
              </div>

              <div
                style={this.state.style2}
                onBlur={this.handleOnBlurEmail}
                onFocus={this.handleOnFocusEmail}

                >
                <p>{this.state.onBlurEmailWarning}</p>
                <label>
                  {stringsFillInForm.emailFillInText}
                  <input type="text"
                  value={this.state.email}
                  placeholder="Wpisz swój e-mail"
                  required
                  onChange={this.handleEmailChange}
                  />
                </label>
              </div>
          </form>
        </div>
        <DescribingTarget></DescribingTarget>
      </div>
    )
  }//end of render
}//registration form end
