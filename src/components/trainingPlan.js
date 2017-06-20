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
    const {login,email,weight,height,trainingType,dateStart,numberOfTrainingDays}=this.props.location.state;
    console.log(numberOfTrainingDays);
    const trainingPlanArr=[];
    trainingPlanArr.push([login,email,weight,height],[],[],[],[],[],[]);

    if(13<=numberOfTrainingDays<=48){
      const numberOfTrainingDaysMinusRaceWeek=numberOfTrainingDays-1;
      const baseStageEarly = Math.round(numberOfTrainingDaysMinusRaceWeek*0,295);
      const baseStageLate = Math.round(numberOfTrainingDaysMinusRaceWeek*0,23);
      const developmentStage = Math.round(numberOfTrainingDaysMinusRaceWeek*0,35);
      const beforeRacePeriod = Math.round(numberOfTrainingDaysMinusRaceWeek*0,11);
      const raceWeek = 1;
      const sumOfStagesdays = (baseStageEarly+baseStageLate+developmentStage+beforeRacePeriod+raceWeek);

      if( sumOfStagesdays < numberOfTrainingDays){
        baseStageEarly=baseStageEarly+1;
      } else if(sumOfStagesdays > numberOfTrainingDays){
        baseStageEarly=baseStageEarly-1;
      }
    }

    for (var i = 0; i < numberOfTrainingDays; i++) {

        const dateStartFull = new Date(dateStart);
        const dateStartNo = Number(dateStartFull);
        const dateCounterNumber = Math.abs(dateStartNo + (i*86400000));
        const currentDateMinusOne = new Date(dateCounterNumber).toJSON().slice(0,10);
        const currentDateDay = new Date(currentDateMinusOne).getDay();

        console.log(dateStartFull);
        console.log(dateStartNo);
        console.log(dateCounterNumber);
        console.log(currentDateMinusOne);
        console.log(currentDateDay);


        trainingPlanArr[1].push(i+1);
        trainingPlanArr[2].push(currentDateMinusOne);

        const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
        const n = weekday[currentDateDay];

        const stages = ["Okres podstawowy - wczesny","Okres podstawowy - późny","Okres rozbudowy ","Okres przed startem","Tydzien startowy"];
        const n2 = stages[currentDateDay];

        trainingPlanArr[3].push(n);

    }
    console.log(trainingPlanArr[1]);
    console.log(trainingPlanArr[2]);
    console.log(trainingPlanArr[3]);

  }

//   preparingTrainingPlan=()=>{
//     this.setState({loading: false});
//   }
//
//   preparingTrainingPlan=()=>{
//     this.setState({loading: false});
//   }
//
//   // let dateMs = new Date(this.state.date).getTime();
//   // console.log(dateMs);
  render(){
    if(this.state.loading){
      return <div>Loading...</div>
    } else {
      return <div>
            </div>
    }
  }//render end
// }//registration form end
//
// const {login,email,weight,height,trainingType,numberOfTrainingDays}=this.props.location;
//
// const Comments = React.createClass({
//   renderComment(comment, i) {
//     return (
//       <div className="comment" key={i}>
//         <p>
//           <strong>{comment.user}</strong>
//           {comment.text}
//           <button className="remove-comment" onClick={this.props.removeComment.bind(null, this.props.params.postId, i)}>&times;</button>
//         </p>
//       </div>
//     )
//   },
//   handleSubmit(e) {
//     e.preventDefault();
//     const { postId } = this.props.params;
//     const author = this.refs.author.value;
//     const comment = this.refs.comment.value;
//     this.props.addComment(postId, author, comment);
//     this.refs.commentForm.reset();
//   },
//   render() {
//     return (
//       <div className="training-plan-chart">
//         <div className="stage-basic-early">
//           {this.props.postComments.map(this.renderComment)}
//         </div>
//         <div className="stage-basic-late">
//           {this.props.postComments.map(this.renderComment)}
//         </div>
//         <div className="stage-gain">
//           {this.props.postComments.map(this.renderComment)}
//         </div>
//         <div className="stage-before-start">
//           {this.props.postComments.map(this.renderComment)}
//         </div>
//         <div className="stage-startweek">
//           {this.props.postComments.map(this.renderComment)}
//         </div>
//       </div>
//     )
//   }
};
