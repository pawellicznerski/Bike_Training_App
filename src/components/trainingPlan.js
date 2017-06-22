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

  floorToWeeks(alldays,firstPart,secondPart){
    const result1 = Math.abs((firstPart+secondPart)-alldays);
    const whichBigger = Math.max(firstPart,secondPart)
    const result2 = Math.abs(firstPart+result1)
  }

  ceilToWeeks(firstPart,secondPart){

  }

  makingTrainingPeriods=()=>{
    const {login,email,weight,height,trainingType,dateStart,numberOfTrainingDays,dateEnd}=this.props.location.state;
    const trainingPlanArr=[];
    trainingPlanArr.push([login,email,weight,height],[],[],[],[],[],[]);




    for (var i = 0; i < numberOfTrainingDays; i++) {

      const dateStartFull = new Date(dateStart);
      const dateStartNo = Number(dateStartFull);
      const dateCounterNumber = Math.abs(dateStartNo + (i*86400000));
      const currentDate = new Date(dateCounterNumber).toJSON().slice(0,10);
      const currentDateDay = new Date(currentDate).getDay();
      // console.log(dateStartFull);
      // console.log(dateStartNo);
      // console.log(dateCounterNumber);
      // console.log(currentDate);
      // console.log(currentDateDay);
      const dateStartOnlyFirst = new Date(dateStart).getDay();
      // console.log('dateStartOnlyFirst:', dateStartOnlyFirst);
      const dateEndOnlyLast = new Date(dateEnd).getDay();
      // console.log('dateEndOnlyLast:', dateEndOnlyLast);


      const howManyDaysAddToFirstWeekArr = [1,0,6,5,4,3,2];


      const numberOfTrainingWeeks = Math.floor(numberOfTrainingDays/7);
      const numberOfTrainingWeeksRest = numberOfTrainingDays%7;

      const firstWeekDays = 7+(howManyDaysAddToFirstWeekArr[dateStartOnlyFirst]);
      // console.log('firstWeekDays:', firstWeekDays);
      const firstWeek = Math.ceil(firstWeekDays/7);
      // console.log('firstWeek:', firstWeek);
      const raceWeekDays = 7+(dateEndOnlyLast);
      // console.log('raceWeekDays:', raceWeekDays);
      const raceWeek = Math.ceil(raceWeekDays/7);
      // console.log('raceWeek:' , raceWeek);

      const noOfDaysToSubsFromMainTr = firstWeekDays+raceWeekDays;
      // console.log('noOfDaysToSubsFromMainTr:', noOfDaysToSubsFromMainTr);
      // console.log('numberOfTrainingDays:', numberOfTrainingDays);
      const noOfWeeksToSubsFromMainTr = Math.ceil(noOfDaysToSubsFromMainTr/7);
      // console.log('noOfWeeksToSubsFromMainTr:' , noOfWeeksToSubsFromMainTr);
      const noOfTrainDaysForMain = numberOfTrainingDays-noOfDaysToSubsFromMainTr;

      const firstDivision = Math.round(noOfTrainDaysForMain*0.55);
      const secondDivision = Math.round(noOfTrainDaysForMain-firstDivision);


      if( noOfTrainDaysForMain < (firstDivision+secondDivision)){
        this.floorToWeeks(noOfTrainDaysForMain,firstDivision,secondDivision)
      } else if(sumOfStagesdays > (firstDivision+secondDivision)){
        this.ceilToWeeks(firstDivision,secondDivision)
      }


      const numberOfTrainingWeeksMinusRaceWeek = numberOfTrainingWeeks-('raceWeek');
      // const baseStageEarlyWeeks = (Math.round(numberOfTrainingWeeksMinusRaceWeek*0.295))+(numberOfTrainingWeeksRest?1:0);
      const baseStageEarlyDays = (Math.round(noOfTrainDaysForMain*0.3));
      // const baseStageLateWeeks = Math.round(numberOfTrainingWeeksMinusRaceWeek*0.24);
      const baseStageLateDays = (Math.round(noOfTrainDaysForMain*0.25));
      // const developmentStageWeeks = Math.round(numberOfTrainingWeeksMinusRaceWeek*0.35);
      const developmentStageDays = (Math.round(noOfTrainDaysForMain*0.35));
      // const beforeRacePeriodWeeks = Math.round(numberOfTrainingWeeksMinusRaceWeek*0.11);
      const beforeRacePeriodDays = (Math.round(noOfTrainDaysForMain*0.10));
      // const sumOfStagesdaweeks = (baseStageEarlyWeeks+baseStageLateWeeks+developmentStageWeeks+beforeRacePeriodWeeks+'raceWeek');
      // const sumOfStagesdays = (baseStageEarlyDays+baseStageLateDays+developmentStageDays+beforeRacePeriodDays+'raceDays');


      const stages = ["Okres podstawowy - wczesny","Okres podstawowy - późny","Okres rozbudowy ","Okres przed startem","Tydzien startowy"];
      const typeOfExercise = ["Wolne","Test - max tempo przez 30min","Regeneracyjny:","Wytrzymałość tlenowa:","Siła mieśniowa i szybkość(młynek):"];
      // const n2 = stages[currentDateDay];
      if(numberOfTrainingWeeksRest > i){
          if(currentDateDay%2!==0){
            trainingPlanArr[4].push(typeOfExercise[0]);
          } else if(currentDateDay%2===0){
            trainingPlanArr[4].push(typeOfExercise[2]+`${trainingType}`);
          }
      }
        trainingPlanArr[1].push(i+1);
        trainingPlanArr[2].push(currentDate);
        // console.log(numberOfTrainingWeeksRest);
        // console.log(trainingPlanArr[4]);

        const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
        const n = weekday[currentDateDay];

        trainingPlanArr[3].push(n);
    }
    // console.log(trainingPlanArr[1]);
    // console.log(trainingPlanArr[2]);
    // console.log(trainingPlanArr[3]);
    // console.log(trainingPlanArr[4]);


  } //and of making training periods

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
