import React, { Component }  from 'react';
import { stringsFillInForm } from './strings.js';
import { TrainingPlan } from './trainingPlan.js';
import { Prompt } from 'react-router-dom';
import { BrowserRouter as Router,Route,Link,NavLink, Switch } from 'react-router-dom';


export class FillInForm extends Component {
  constructor(props) {
  super(props);
  this.state = {
      isBlocking: false,
      loading: true,
      describingTargetLoaded: false,
      login: 'Krzychu5',
      emptyFieldWarning:'',
      email: 'pawellicznerski@poczta.fm',
      weight: '87',
      height: '189',
      trainingType: '300',
      dateStart: '2017-06-09',
      emptydateStartFieldWarning:"",
      dateEnd: '2017-06-19',
      emptydateEndFieldWarning:"",

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

handleRegistrationData =(event)=>{
  event.preventDefault();
  const target = event.target;
  for (var i = 0; i <= (target.length-1); i++) {
    if(target[i].value ===""){
      const name = target[i].name;
      const nameWarning = `empty${name}FieldWarning`;
      const warningString = stringsFillInForm.emptyFieldWarning;

      this.setState({
         [nameWarning]:[warningString],
         isBlocking: false,
         loading:false,
       });
    }
  }
  if (this.state.loading===true){
    this.handleloadingTrainingPlan()
  }
}

handleloadingTrainingPlan=()=>{
  this.handleDates();
}

handleDates=()=>{
  console.log("właśnie kliknąłes submit");
  const firstDate = new Date(this.state.dateStart);
  const secondDate = new Date(this.state.dateEnd);
  console.log(firstDate);
  console.log(secondDate);
  const difference = Math.abs(firstDate - secondDate);
  const numberOfTrainingDays = (difference/86400000);
  const numberStartDays = Math.abs(firstDate/86400000);

    if(secondDate<=firstDate ) {
      console.log("wrong - druga data jest wczesniejsza");
      this.setState({
        emptydateStartFieldWarning: "Data rozpoczęcia treningu nie może byc późniejsza od daty szczutu formy",
        emptydateEndFieldWarning: "Data rozpoczęcia treningu nie może byc późniejsza od daty szczutu formy",
        isBlocking: true,
        loading:false,
       });
    } else if(secondDate>firstDate ) {
      console.log("wszystko gra - daty są ok");
      this.setState({
        emptydateStartFieldWarning: "",
        emptydateEndFieldWarning: "",
        isBlocking: false,
        loading:true,
       });
    }

}

handleDateOnBlur =()=>{

}

handleDateOnFocus =(e)=>{
  e.preventDefault();
  this.setState({
    emptydateStartFieldWarning: "",
    emptydateEndFieldWarning: "",
    isBlocking: false,
    loading:true,
   });
}//end of focus function

handleOnBlur =(e)=>{
  e.preventDefault();
  const name = e.target.name;

  if(name==="login"){
    const blurredFieldData = this.state.login;
    const basicDataFormat = /(?=.*\d)(?=.*[A-Za-z]).{4,15}/;
    const currentWarningBlurText = stringsFillInForm.loginFormatWarning ;
    this.handleValidation(name,blurredFieldData,basicDataFormat,currentWarningBlurText);
  } else if (name==="email"){
    const blurredFieldData = this.state.email;
    const basicDataFormat = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const currentWarningBlurText = stringsFillInForm.emailFormatWarning ;
    this.handleValidation(name,blurredFieldData,basicDataFormat,currentWarningBlurText);
  } else {
    console.log("złasnie zblurowałeś datę");
    console.log(this.state.dateStart);
    console.log(this.state.dateEnd);
  }
}//end of blur function

handleValidation=(name,blurredFieldData,basicDataFormat,currentWarningBlurText)=>{
  if(blurredFieldData===""){
    const nameWarning = `empty${name}FieldWarning`;
    this.setState({
      [nameWarning]: `Wpisz ${name}`,
    })
    return false;
  } else if (!basicDataFormat.test(blurredFieldData)) {
    const nameWarning = `empty${name}FieldWarning`;
    this.setState({
      isBlocking: true,
      [nameWarning]: currentWarningBlurText
    })
    return false;
  }
  //   else {
  //   fetch(`http://localhost:3000/people?name=${this.state.login}`).then(resp => resp.json())
  //     .then(data => {
  //       if(data.length===0){
  //         console.log("nie ma w bazie");
  //       } else if (data.length!==0){
  //         console.log("jest w bazie");
  //       }
  //     });
  //   this.setState({
  //     [nameWarning]: "",
  //   })
  // }
};

handleInputChange =(event)=>{
  const target = event.target;
  const value = target.type === 'checkbox' ? target.checked : target.value;//potrzebne w razie dolączenia checkbox-a
  const name = target.name;
  const nameWarning = `empty${name}FieldWarning`;

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
                  onBlur={this.handleOnBlur}
                  onFocus={this.handleOnFocusLogin}
                  title="Login musi zawierać między 4 a 15 znaków, chociaż jedną literę i liczbę"
                  name="login"
                />
              </label>
              <p>{this.state.emptyloginFieldWarning}</p>
            </div>

            <div style={this.state.style2}>
              <label>
                {stringsFillInForm.emailFillInText}
                <input
                  type="text"
                  value={this.state.email}
                  placeholder="Wpisz swój e-mail"
                  onChange={this.handleInputChange}
                  onBlur={this.handleOnBlur}
                  onFocus={this.handleOnFocusEmail}
                  title="Wpisz prawidłowy adres e-mail"
                  name="email"
                />
              </label>
              <p>{this.state.emptyemailFieldWarning}</p>
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
              <p>{this.state.emptyweightFieldWarning}</p>
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
              <p>{this.state.emptyheightFieldWarning}</p>
            </div>

            <div style={this.state.style2}>
              {stringsFillInForm.trainingTypeFillInText}
              <label>
                <input
                  value={this.state.trainingType}
                  onChange={this.handleInputChange}
                  name="trainingType"
                  type="number"
                  value={this.state.trainingType}
                  placeholder="Wpisz dystans ultramaratonu:"
                  min="200"
                  max="10000"
                  pattern="[3-9]/d$"
                  title="Wpisz dystans od 200 do 10000"
                />
            </label>
              <p>{this.state.emptytrainingTypeFieldWarning}</p>
            </div>

            <div style={this.state.style2}>
              <label>
                {stringsFillInForm.dateStartFillInText}
                <input
                type="date"
                value={this.state.dateStart}
                onChange={this.handleInputChange}
                name="dateStart"
                onBlur={this.handleDateOnBlur}
                onFocus={this.handleDateOnFocus}
                />
              </label>
              <p>{this.state.emptydateStartFieldWarning}</p>
            </div>

            <div style={this.state.style2}>
              <label>
                {stringsFillInForm.dateFillInText}
                <input
                type="date"
                value={this.state.dateEnd}
                onChange={this.handleInputChange}
                name="dateEnd"
                onBlur={this.handleDateOnBlur}
                onFocus={this.handleDateOnFocus}
                />
              </label>
              <p>{this.state.emptydateEndFieldWarning}</p>
            </div>

            <input type="submit" value={stringsFillInForm.inputSubmitValue} />

          </form>
          </div>
          <button onClick={this.returnToMenu}>{stringsFillInForm.backToMenuFillInForm}</button>
      </div>
    )
  }//end of render
}//registration form end
