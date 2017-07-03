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
// <NavLink to="/"><img className="menu-btn2" src="components/images/ultraTreningLogo1.svg"/></NavLink>
class App extends Component {

render() {
  return (
    <Router history={history}>
      <div className="App">
        <div className="container">
            <nav id="row-1">
              <NavLink to="/"><div className="menu-btn"> </div></NavLink>
              <div className="nav-btns-cont">
              <svg className="nav-btns nav-btn1-colr">
  <circle cx="50" cy="50" r="40" stroke="green" stroke-width="4"/>
</svg>
                <NavLink to={`/wyswietltrening`}><div className="nav-btns nav-btn1-colr">Twój trening</div></NavLink>
                <NavLink to={`/nowekonto`}><div className="nav-btns nav-btn2-colr">Nowy użytkownik</div></NavLink>
              </div>
            </nav>
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route exact path="/wyswietltrening" component={EntryForm}/>
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
