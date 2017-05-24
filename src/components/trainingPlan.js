import React, { Component }  from 'react';
import {stringsTrainingPlan} from './strings.js';

export class TrainingPlan extends Component {
    constructor(props) {
    super(props);
    this.state={
      loading:true,
    }
    //Pierwsza wartość inputa ustawiona na '':
    // this.state = {
    //     date:this.props.date,
    //   };
  } //props end


  componentDidMount() {
      this.makingTrainingPeriods();
  }

  makingTrainingPeriods=()=>{
  }

  preparingTrainingPlan=()=>{
    this.setState({loading: false});
  }
  // let dateMs = new Date(this.state.date).getTime();
  // console.log(dateMs);
  render(){
    if(this.state.loading){
      return <div>Loading...</div>
    } else {
      return <div>
            </div>
    }
  }//render end
}//registration form end
