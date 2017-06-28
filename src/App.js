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
    currentLabel: stringsApp.appLoginButton,
    nextLabel: stringsApp.appNewAccountButton,
    }
}

render() {
  return (
    <Router history={history}>
      <div className="App">
        <div>

            <nav>
              <div>
                <NavLink to="/"><button>menu</button></NavLink>
              </div>
            <NavLink to={`/${this.state.currentLabel}`}><button>{this.state.currentLabel}</button></NavLink>
            <NavLink to={`/${this.state.nextLabel}`}><button>{this.state.nextLabel}</button></NavLink>
            </nav>
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route exact path="/logowanie" component={EntryForm}/>
              <Route exact path="/nowekonto" component={FillInForm}/>
              <Route exact path={`/nowekonto/trainingPlan/:login`} component={TrainingPlan} state/>
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
