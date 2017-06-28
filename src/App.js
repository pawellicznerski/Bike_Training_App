import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router,Route,Link,NavLink, Switch } from 'react-router-dom';
import { EntryForm } from './components/entryForm.js';
import { FillInForm } from './components/fillInForm.js';
import { stringsApp } from './components/strings.js';
import { NoMatch } from './components/noMatch.js';
import { TrainingPlan }  from './components/trainingPlan.js';
import { TrainingPlanPDF }  from './components/trainingPlanPDF.js';
import { TrainingDay }  from './components/trainingDay.js';

const Home =()=> (
  <Router>
    <div>
      {stringsApp.appWelcomeText}
      <button ><NavLink to={`/`}>cos tu sie wpisze</NavLink></button>
      <Route exact path={`/`}/>
    </div>
  </Router>
)

class App extends Component {
  constructor(props) {
  super(props);
  this.state = {
    logbtn: true,
    theUser:'',
    }
}

logBtnReplace=()=>{
  this.state = {
    logbtn: true,
    theUser:'',
  }}

render() {
  return (
    <Router history={history}>
      <div className="App">
        <div>

            <nav>
              <div>
                <NavLink to="/"><button>menu</button></NavLink>
              </div>
              {this.state.logbtn?<NavLink to={`/logowanie`}><button>logowanie</button></NavLink>:<p>{this.state.theUser}</p>}
              <NavLink to={`/nowekonto`}><button>nowekonto</button></NavLink>
            </nav>
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route exact path="/logowanie" component={EntryForm} logBtnReplace={this.logBtnReplace}/>
              <Route exact path="/nowekonto" component={FillInForm}  logBtnReplace={this.logBtnReplace}/>
              <Route exact path={`/nowekonto/trainingPlan/:login`} component={TrainingPlan} state  logBtnReplace={this.logBtnReplace}/>
              <Route exact path={`/nowekonto/trainingPlan/:login/PDF`} component={TrainingPlanPDF}/>
              <Route component={NoMatch}/>
            </Switch>

        </div>
      </div>
    </Router>
  );
}

}//end of App

export default App;
