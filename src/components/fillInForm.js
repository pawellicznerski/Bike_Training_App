import React, { Component }  from 'react';
import { stringsFillInForm, stringsRenderingSuggestions } from './strings.js';
import { TrainingPlan } from './trainingPlan.js';
import { HandleRenderingSuggestions } from './renderingSuggestions.js';
import { BrowserRouter as Router,Route,Link,NavLink, Switch } from 'react-router-dom';
import { currentDateNumberMinusOneDay, currentDate, currentDateMinusOne }  from './handleMinDate.js';
import { AreYouSureToGoToTraining }  from './areYouSureToGoToTraining.js';
import { Prompt } from 'react-router-dom';

export class FillInForm extends Component {
  constructor(props) {
  super(props);
  this.state = {
      isBlocking: false,
      loading: false,
      describingTargetLoaded: false,
      login: 'Krzychu5',
      emptyFieldWarning:'',
      email: 'pawellicznerski@poczta.fm',
      weight: '87',
      height: '189',
      yourExperience:'',
      emptyyourExperienceFieldWarning:"",
      trainingType: '300',
      trainingTypeSuggestion: 0,
      dateStart: '2017-06-15',
      emptydateStartFieldWarning:"",
      dateSuggestion:1,
      dateEnd: '2018-06-19',
      emptydateEndFieldWarning:"",
      renderNotEnoughTimeToPrepare: false,
      numberOfTrainingDays:10,
      renderPromptNumberOfDays: false,
      numberOfChosenTrainingWeeks:'',
      renderAreYouSureToGoToTraining: false,

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
    this.handleRegistrationData = this.handleRegistrationData.bind(this);


} //props end

handleRegistrationData =(e)=>{
  e.preventDefault();
  const target = e.target;
  console.log("handleRegistrationData");
  for (var i = 0; i <= (target.length-1); i++) {
    if(target[i].value ===""){
      const name = target[i].name;
      const nameWarning = `empty${name}FieldWarning`;
      const warningString = stringsFillInForm.emptyFieldWarning;
      this.setState({
         [nameWarning]:[warningString],
         loading:false,
       });
    }
  }
    this.handleloadingTrainingPlan()
}

handleloadingTrainingPlan=()=>{
  this.handleYourExperience();
  this.handleDates();
}

handleYourExperience=()=>{
  if(!this.state.yourExperience){
    this.setState({
      emptyyourExperienceFieldWarning: "musisz wybrac jedną z opcji"
    });
   }
}

handleDates=()=>{
  const firstDate = new Date(this.state.dateStart);
  const secondDate = new Date(this.state.dateEnd);
  console.log("dotarło do handle dates");

    if(secondDate<=firstDate ) {
      this.handleIfWrongDate();
    } else if(secondDate>firstDate ) {
      const {suggestedValues} = stringsRenderingSuggestions;
      const numberOfTrainingDays = ((secondDate-firstDate)/86400000);
      this.setState({
        emptydateStartFieldWarning: "",
        emptydateEndFieldWarning: "",
       });
      if(numberOfTrainingDays < suggestedValues[this.state.yourExperience][this.state.dateSuggestion]){
         this.setState({
           numberOfTrainingDays: numberOfTrainingDays,
           renderNotEnoughTimeToPrepare: true,
           isBlocking: false,
          });
      } else {
        this.setState({
          loading:true,
          isBlocking: false,
          renderAreYouSureToGoToTraining: true,
         });
      }
    }
}

handleIfWrongDate=()=>{
  console.log("wrong - druga data jest wczesniejsza");
  this.setState({
    emptydateStartFieldWarning: "Wpisz prawidłowe datę (druga data nie może być starsza od pierwszej)",
    emptydateEndFieldWarning: "Wpisz prawidłowe datę (druga data nie może być starsza od pierwszej)",
   });
}//end of handleIfWrongDate


handleDateOnFocus =(e)=>{
  e.preventDefault();
  this.setState({
    emptydateStartFieldWarning: "",
    emptydateEndFieldWarning: "",
    numberOfChosenTrainingWeeks: "",
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
  } else if(name==="email"){
    const blurredFieldData = this.state.email;
    const basicDataFormat = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const currentWarningBlurText = stringsFillInForm.emailFormatWarning ;
    this.handleValidation(name,blurredFieldData,basicDataFormat,currentWarningBlurText);
  } else {
    console.log("złasnie zblurowałeś coś poza login i email");
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
}; //end of handleValidation

handleInputChange =(e)=>{
  const target = e.target;
  const value = target.type === 'checkbox' ? target.checked : target.value;//potrzebne w razie dolączenia checkbox-a
  const name = target.name;
  const nameWarning = `empty${name}FieldWarning`;

  this.setState({
     [name]: value,
     [nameWarning]:'',
     isBlocking: true,
   });
} //end of handleInputChange

returnToMenu=(e)=>{
  e.preventDefault();
  this.props.history.push('/');
}//end of returnToMenu

returnToFillInForm=()=>{
  this.setState({
    renderNotEnoughTimeToPrepare: false,
    renderAreYouSureToGoToTraining: false,
   });
} //end of returnToFillInForm

loadingTrainingPlan=()=>{
  this.setState({
    renderNotEnoughTimeToPrepare: false,
    renderAreYouSureToGoToTraining: false,
   });
   const loadingPlanLogin= this.state.login;
   this.props.history.push({pathname: `/nowekonto/trainingPlan/${loadingPlanLogin}`,
     state: {
       login:this.state.login,
       email:this.state.email,
       weight:this.state.weight,
       height:this.state.height,
       trainingType:this.state.trainingType,
       numberOfTrainingDays:this.state.numberOfTrainingDays,
     },
   });
} //end of loadTrainingPlanWithoutSuggestions

showNumberOfWeeks=(e)=>{
  e.preventDefault();
  const firstDate = new Date(this.state.dateStart);
  const secondDate = new Date(this.state.dateEnd);
  const numberOfTrainingDays = ((secondDate-firstDate)/86400000);
  const numberOfChosenTrainingWeeks = Math.floor(numberOfTrainingDays/7)

  if(secondDate<=firstDate||isNaN(numberOfChosenTrainingWeeks)) {
    this.handleIfWrongDate()
  } else {
    this.setState({
      renderPromptNumberOfDays: true,
      numberOfChosenTrainingWeeks: numberOfChosenTrainingWeeks,
     });
  }
}// end of showNumberOfWeeks


render(){
    const {isBlocking} = this.state;
    return (
      <div>
        <AreYouSureToGoToTraining returnToFillInForm={this.returnToFillInForm} loadingTrainingPlan={this.loadingTrainingPlan} {...this.state}></AreYouSureToGoToTraining>
        <Prompt when={isBlocking} message={"Niekóre pola sa wypełnione, czy na pewno chcesz wyjść?"}/>
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
              <p style={{color:'red'}}>{this.state.emptyloginFieldWarning}</p>
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
              <p style={{color:'red'}}>{this.state.emptyemailFieldWarning}</p>
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
              <p style={{color:'red'}}>{this.state.emptyweightFieldWarning}</p>
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
              <p style={{color:'red'}}>{this.state.emptyheightFieldWarning}</p>
            </div>

            <div style={this.state.style2}>
              Wybierz swój poziom zaawansowania:<br/>
              <label>
                  Podstawowy
                <input type="radio" name="yourExperience" value="0" onChange={this.handleInputChange}/><br/>
                  Średni
                <input type="radio" name="yourExperience" value="1" onChange={this.handleInputChange}/><br/>
                  Zaawansowany
                <input type="radio" name="yourExperience" value="2" onChange={this.handleInputChange}/>
              </label>
              <p style={{color:'red'}}>{this.state.emptyyourExperienceFieldWarning}</p>
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
                  title="Wpisz dystans od 200 do 10000"
                />
            </label>
            <HandleRenderingSuggestions yourExperience={this.state.yourExperience} placeOfRendering={this.state.trainingTypeSuggestion}></HandleRenderingSuggestions>
            <p style={{color:'red'}}>{this.state.emptytrainingTypeFieldWarning}</p>
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
                min={currentDateMinusOne}
                />
              </label>
            <HandleRenderingSuggestions yourExperience={this.state.yourExperience} placeOfRendering={this.state.dateSuggestion}></HandleRenderingSuggestions>
            <p style={{color:'red'}}>{this.state.emptydateStartFieldWarning}</p>
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
                min={currentDate}
                />
              </label>
            <HandleRenderingSuggestions yourExperience={this.state.yourExperience} placeOfRendering={this.state.dateSuggestion}></HandleRenderingSuggestions>
            <p style={{color:'red'}}>{this.state.emptydateEndFieldWarning}</p>
            </div>

            <button className="weeks-no-propt-btn" onClick={this.showNumberOfWeeks}>Wyświetl liczbę tygodni:</button><div>{this.state.numberOfChosenTrainingWeeks}</div>

            <button type="submit">{stringsFillInForm.inputSubmitValue}</button>

          </form>
          </div>
          <button onClick={this.returnToMenu}>{stringsFillInForm.backToMenuFillInForm}</button>
      </div>
    )
  }//end of render
}//registration form end
