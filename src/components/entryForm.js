import React, { Component }  from 'react';
import {stringsLoginForm} from './strings.js';
import {FillInForm} from './fillInForm.js';
import {TrainingPlan} from './trainingPlan.js';


export class EntryForm extends Component {
  constructor(props) {
  super(props);
  //Pierwsza wartość inputa ustawiona na '':
  this.state = {
      loading: false,
      login: '',
      email: '',
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
        width:'100px',
        height:'100px',
        display:'flex',
        justifyContent:'middle',
        flexDirection:'row',
        backgroundColor:'yellow'
      },
    };
} //props end

handleRegistrationData = (e) => {
  e.preventDefault();

  if(this.state.login===""||this.state.email===''){
    alert("Żeby się zajerestrować musisz wpisać imię/login i email")
  } else {
      fetch(`http://localhost:3000/people?name=${this.state.login}&email=${this.state.email}`)
        .then(resp => {
          if (resp.ok) {
            return resp.json()
          } else {
            throw new Error('Błąd sieci!');
          }})
        .then(data => {
          if(data.length===0){
            console.log(data);
           console.log("ni ma takygo kunta, sprobuj jyszczy raz");
          } else {
            console.log('idziesz do training plan');
            this.setState({loadedFileNo: 3})
          }
        }); //end of fetch
  };//end of the condition
}//end of handleRegistrationData

handleNameChange=(e)=>{
  this.setState({login: e.target.value});
}

handleEmailChange=(e)=>{
  this.setState({email: e.target.value});
}

returnToMenu=(e)=>{
  e.preventDefault();
  this.props.history.push('/');
}

render(){
  return <div>
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
                  <input type="submit" value={stringsLoginForm.inputSubmitValue} />
                </div>
              </form>
            </div>
            <button onClick={this.returnToMenu}>{stringsLoginForm.backToMenuLoginForm}</button>
        </div>
      }
}//registration form end
