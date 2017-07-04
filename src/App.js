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
    active: true,
    };
    this.toggleClass = this.toggleClass.bind(this);

} //props end
   toggleClass(e) {
     e.preventDefault();
     const currentState = this.state.active;
     console.log( this.state.active);
     this.setState({ active: !currentState });
     console.log( this.state.active);
   };


render() {
  return (
    <Router history={history}>
      <div className="App">
        <div className="container">
            <Sticky>
            <nav id="row-1">
              <NavLink to="/"><div className="menu-logo"> </div></NavLink>
              <div className={this.state.active ? "nav-btns-cont0": "nav-btns-cont1"}>
                <div className={this.state.active ? "menu-btn0": "menu-btn1"} onClick={this.toggleClass}></div>
                <NavLink to={`/wyswietltrening`}  style={{ textDecoration: 'none'}} ><div className="nav-btns nav-btn1-colr"><p>stary plan</p></div></NavLink>
                <NavLink to={`/nowekonto`} style={{ textDecoration: 'none' }}><div className="nav-btns nav-btn2-colr"><p>nowy plan</p></div></NavLink>
              </div>
            </nav>
          </Sticky>
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

class Sticky extends React.Component {
constructor(props) {
    super(props);
    this.state = {
      scrollingLock: false
    };
    // example how to bind object in React ES6
    this.handleScroll = this.handleScroll.bind(this)
}

componentDidMount(){
    window.addEventListener('scroll', this.handleScroll);
}

componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
}

handleScroll() {

  if (window.scrollY > 100) {
    console.log("should lock");
    this.setState({
      scrollingLock: true
    });
  } else if (window.scrollY < 100) {
    console.log("not locked" );
    this.setState({
      scrollingLock: false
    });
  }

}

render() {

    return (
            <div style={{ width: "100%", position: this.state.scrollingLock ? "fixed" : "relative"}}>
                    {this.props.children}
            </div>
          )
            }
   }
