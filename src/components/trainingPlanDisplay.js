import React, { Component }  from 'react';
import { stringsFillInForm } from './strings.js';
import { TrainingPlan } from './trainingPlan.js';
import { Prompt } from 'react-router-dom';
import { BrowserRouter as Router,Route,Link,NavLink, Switch } from 'react-router-dom';


export class TrainingPlanDisplay extends Component {
  constructor(props) {
  super(props);
  this.state = {
    };
} //props end



returnToMenu=(e)=>{
  e.preventDefault();
  this.props.history.push('/');
}


render(){
    return (
    )
  }//end of render
}//registration form end
