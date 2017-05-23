import React, { Component }  from 'react';
import {stringsFillInForm} from './strings.js';
import {TrainingPlan} from './trainingPlan.js';
import {Prompt} from 'react-router-dom';

export class FillInForm extends Component {
  constructor(props) {
  super(props);
  //Pierwsza wartość inputa ustawiona na '':
  this.state = {
      isBlocking: false,
      loading: true,
      correctlyFilledForm: true,
      login: '',
      email: '',
      weight: '',
      height: '',
      trainingType: '',
      dateStart: '',
      dateEnd: '',
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
    isBlocking: false
  })

  if(this.state.fullName===""){
    alert("wypełnj piste pola")
  } else if (this.state.email===""){
    alert("wypełnj piste pola")
  } else if (this.state.weight===""){
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


  console.log(this.state.login);
  console.log(this.state.email);
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



handleEmailChange=(e)=>{
  e.preventDefault();
  this.setState({
    email: e.target.value,
    isBlocking: e.target.value.length > 0
  });
  console.log(this.state.email);
}
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

returnToMenu=(e)=>{
  e.preventDefault();
  this.props.history.push('/');
}


//
// //code from the internet
//
// var Input = React.createClass({
//   getInitialState: function(){
//     // we don't want to validate the input until the user starts typing
//     return {
//       validationStarted: false
//     };
//   },
//
//
//   prepareToValidate: function(){},
//   componentWillMount: function(){
//     var startValidation = function(){
//       this.setState({
//         validationStarted: true
//       })
//     }.bind(this);
//
//     // if non-blank value: validate now
//     if (this.props.value) {
//       startValidation();
//     }
//     // wait until they start typing, and then stop
//     else {
//       this.prepareToValidate = _.debounce(startValidation, 1000);
//     }
//   },
//
//
//   handleChange: function(e){
//     if (!this.state.validationStarted) {
//       this.prepareToValidate();
//     }
//     this.props.onChange && this.props.onChange(e);
//   },
//
//
//   render: function(){
//     var className = "";
//     if (this.state.validationStarted) {
//        className = (this.props.valid ? "valid" : "invalid");
//     }
//
//     return this.transferPropsTo(<input
//         className={className}
//         onChange={this.handleChange} />);
//   }
// });
//
//
// var App = React.createClass({
//   getInitialState: function(){
//     return {value: "", price: ""};
//   },
//   handleChange: function(e){
//     this.setState({
//       value: e.target.value
//     })
//   },
//   handlePriceChange: function(e){
//     this.setState({
//       price: e.target.value
//     })
//   },
//   validate: function(state){
//     return {
//       value: state.value.indexOf('react') !== -1,
//       price: /^\$\d+\.\d+$/.test(state.price)
//     }
//   },
//   render: function(){
//     var valid = this.validate(this.state);
//     return (
//       <div>
//         <Input valid={valid.value}
//                className='foobar'
//                value={this.state.value}
//                onChange={this.handleChange}
//                placeholder="something with 'react'"/>
//         <Input valid={valid.price}
//               value={this.state.price}
//               onChange={this.handlePriceChange}
//               placeholder="$0.00" />
//       </div>
//     );
//   }
// });
//
// React.render(<App />, document.body);
//
//


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
                <input type="text"
                value={this.state.login}
                onChange={this.handleLogin}
                placeholder="Wpisz imie"
                pattern="(?=.*\d)(?=.*[A-Za-z]).{4,15}"
                title="Login musi zawierac co najmniej jedną liczbę, jedną literę i od 4 do 15 znaków"
                required
                />
              </label>
            </div>

            <button>Sprawdź dostępność loginu</button>

            <div style={this.state.style2}>
              <label>
                {stringsFillInForm.emailFillInText}
                <input type="text"
                value={this.state.email}
                onChange={this.handleEmailChange}
                placeholder="Wpisz swój e-mail"
                pattern="[a-z0-9._%+-]{3,30}@[a-z0-9.-]{1-20}\.[a-z]{2,4}$"
                title="Wpisz prawidłowy adres e-mail"
                required
                />
              </label>
            </div>

            <button>Sprawdź czy e-mail nie jest zajety</button>

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
            <input type="submit" value={stringsFillInForm.inputSubmitValue} />
          </div>
        </form>
      </div>
      <button onClick={this.returnToMenu}>{stringsFillInForm.backToMenuFillInForm}</button>
    </div>
    )
  }//end of render
}//registration form end
