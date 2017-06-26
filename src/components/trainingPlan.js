import React, { Component }  from 'react';
import {stringsTrainingPlan} from './strings.js';

export class TrainingPlan extends Component {
    constructor(props) {
    super(props);
    this.state={
      loading:true,
      firstTrainingHalf:'',
      secondTrainingHalf:'',
      firstTrainingQuarter:'',
      secondTrainingQuarter:'',
      thirdTrainingQuarter:'',
      fourthTrainingQuarter:'',
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
    const {login,email,weight,height,trainingType,dateStart,numberOfTrainingDays,dateEnd}=this.props.location.state;
    const trainingPlanArr=[];
    trainingPlanArr.push([login,email,weight,height],[],[],[],[],[],[],[]);
    const dateStartNo = Number(new Date(dateStart));
    const dateStartOnlyFirst = new Date(dateStart).getDay();
    // console.log('dateStartOnlyFirst:', dateStartOnlyFirst);
    const dateEndOnlyLast = new Date(dateEnd).getDay();
    // console.log('dateEndOnlyLast:', dateEndOnlyLast);
    const howManyDaysAddToFirstWeekArr = [1,0,6,5,4,3,2];
    const numberOfTrainingWeeks = Math.floor(numberOfTrainingDays/7);
    const firstWeekDays = 7+(howManyDaysAddToFirstWeekArr[dateStartOnlyFirst]);
    // console.log('firstWeekDays:', firstWeekDays);
    const firstWeek = Math.ceil(firstWeekDays/7);
    // console.log('firstWeek:', firstWeek);
    const raceWeekDays = 7+(dateEndOnlyLast);
    // console.log('raceWeekDays:', raceWeekDays);
    const raceWeek = Math.ceil(raceWeekDays/7);
    // console.log('raceWeek:' , raceWeek);
    const noOfTrainWeeksForMain = (numberOfTrainingDays-(firstWeekDays+raceWeekDays))/7;
    // console.log(noOfTrainWeeksForMain);
    const noOfTrainDaysForMain = (numberOfTrainingDays-(firstWeekDays+raceWeekDays));


    for (var i = 0; i < numberOfTrainingDays; i++) {
      const currentDateNo = Math.abs(dateStartNo + (i*86400000));
      const currentDate = new Date(currentDateNo).toJSON().slice(0,10);
      const currentDateDay = new Date(currentDate).getDay();
      // console.log(dateStartFull);
      // console.log(dateStartNo);
      // console.log(currentDateNo);
      // console.log(currentDate);
      // console.log(currentDateDay);

      const firstTrainingHalf = (Math.round(noOfTrainWeeksForMain*0.5441));
      console.log(firstTrainingHalf);
      const secondTrainingHalf = (Math.round(noOfTrainWeeksForMain-firstTrainingHalf));
      console.log(secondTrainingHalf);
      const firstTrainingQuarter = Math.round(firstTrainingHalf*0.4559);
      const secondTrainingQuarter = Math.round(firstTrainingHalf-firstTrainingQuarter);
      const thirdTrainingQuarter = Math.round(secondTrainingHalf*0.7551);
      const fourthTrainingQuarter = Math.round(secondTrainingHalf-thirdTrainingQuarter);

      console.log(firstTrainingHalf);
      console.log(secondTrainingHalf);

      console.log("numberOfTrainingWeeks:",numberOfTrainingWeeks);
      console.log('firstWeek:' ,firstWeek);
      console.log('firstTrainingQuarter:' ,firstTrainingQuarter);
      console.log('secondTrainingQuarter:' ,secondTrainingQuarter);
      console.log('thirdTrainingQuarter:' ,thirdTrainingQuarter);
      console.log('fourthTrainingQuarter:' ,fourthTrainingQuarter);
      console.log('raceWeek:' ,raceWeek);


      console.log('numberOfTrainingDays:' ,numberOfTrainingDays);
      console.log('firstWeekDays:' ,firstWeekDays);
      console.log('raceWeekDays:' ,raceWeekDays);
      console.log('noOfTrainDaysForMain:' ,noOfTrainDaysForMain);

      // console.log(raceWeek);

      const stages = ["Okres podstawowy - wczesny","Okres podstawowy - późny","Okres rozbudowy ","Okres przed startem","Tydzien startowy"];
      const typeOfExercise = ["Test","Regeneracyjny","Wytrzymałość tlenowa","Siła mieśniowa i szybkość(młynek)","Wytrzymałość siłowa","Wolne","Symulacja ultramaratonu","Wolne lub regeneracyjny"];
      const aerobicEnduraceExerc = ["Długa jazda","Symulacja ultramaratonu"];
      const testExerc = ["Max tempo przez 30 min."];
      const stregthEnduranceExerc = ["Interwał"];
      const muscleStrengthExerc = ["Interwał"];
      const speedExerc = ["Młynek"];
      const regenerationExerc = ['',"Wolna jazda przez"];
      // const n2 = stages[currentDateDay];
      const stage1week = []


      const stage1 = firstWeekDays;
      const stage2 = firstWeekDays+(firstTrainingQuarter*7);
      const stage3 = firstWeekDays+((firstTrainingQuarter+secondTrainingQuarter)*7);
      const stage4 = firstWeekDays+((firstTrainingQuarter+secondTrainingQuarter+thirdTrainingQuarter)*7);
      const stage5 = firstWeekDays+((firstTrainingQuarter+secondTrainingQuarter+thirdTrainingQuarter+fourthTrainingQuarter)*7);
      const stage6 = firstWeekDays+((firstTrainingQuarter+secondTrainingQuarter+thirdTrainingQuarter+fourthTrainingQuarter)*7)+raceWeekDays;

      const regenerationTr = [typeOfExercise[1],regenerationExerc[1],`${Math.round(trainingType*(0.05+(0.005*i)))}km`];
      const breakDay = [typeOfExercise[5],'',''];
      const regeOrBreak = [`${typeOfExercise[5]} lub ${typeOfExercise[1]}`,regenerationExerc[1],`${Math.round(trainingType*(0.05+(0.005*i)))}km`];
      const strengthAndSpeed = [typeOfExercise[3],`${muscleStrengthExerc[0]} i ${speedExerc[0]}`,`Siłowy:${Math.round(0.15*(0.5*i))}(${Math.round(0.17*(0.5*i))}x(8-14)cad.), Szybkościowy:${Math.round(0.15*(0.5*i))}x(${Math.round(0.17*(0.5*i))}x${1+((Math.round(0.17*(0.4*i)))/10)})`];
      const aerobicEndTr = [typeOfExercise[2],aerobicEnduraceExerc[0],`Czas:${Math.floor((80+(Math.round(1.428571429*i)))/60)}g${(80+(Math.round(1.428571429*i)))%60}min`];
      const strengthEndTr = [typeOfExercise[4],stregthEnduranceExerc[0],`2x${Math.round(0.67*(0.3*i))}min`];
      const ultraTr = [typeOfExercise[6],aerobicEnduraceExerc[1],`Czas: ${Math.round((trainingType*0.4)+(trainingType/(stage4/7)*(1.428571429*i)))}`];

      const stageArr1 = [0,regenerationTr,1,breakDay,2,regenerationTr,3,breakDay,4,regenerationTr,5,breakDay,6,regenerationTr,stages[0]];
      const stageArr2 = [0,strengthAndSpeed,1,regeOrBreak,2,aerobicEndTr,3,regeOrBreak,4,strengthAndSpeed,5,regeOrBreak,6,aerobicEndTr,stages[0]];
      const stageArr3 = [0,strengthAndSpeed,1,regeOrBreak,2,aerobicEndTr,3,regeOrBreak ,4,strengthEndTr,5,regeOrBreak,6,aerobicEndTr,stages[1]];
      const stageArr4 = [0,strengthAndSpeed,1,regeOrBreak,2,aerobicEndTr,3,regeOrBreak,4,strengthEndTr,5,regeOrBreak,6,ultraTr,stages[2]];
      const stageArr5 = [0,strengthAndSpeed,1,regeOrBreak,2,aerobicEndTr,3,regeOrBreak,4,strengthEndTr,5,regeOrBreak,6,ultraTr,stages[3]];
      const stageArr6 = [0,regenerationTr,1,breakDay,2,regenerationTr,3,breakDay,4,regenerationTr,5,breakDay,6,regenerationTr,stages[4] ];

      console.log(regenerationTr);
      console.log(stageArr1[10]);

       var currentStageArr='';
       var currentStage='';

       if(i < stage1){
          currentStageArr = stageArr1;
          currentStage=stage1;
        } else if(i < stage2){
          currentStageArr = stageArr2;
          currentStage=stage2;
        } else if(i < stage3){
          currentStageArr = stageArr3;
          currentStage=stage3;
        } else if(i < stage4){
          currentStageArr = stageArr4;
          currentStage=stage4;
        } else if(i < stage5){
          currentStageArr = stageArr5;
          currentStage=stage5;
        } else if(i < stage6){
          currentStageArr = stageArr6;
          currentStage=stage6;
        }

      if(i < currentStage){
        console.log('currentStage loading main array');
        console.log(currentStage);
        console.log(currentStageArr[1][2]);
        console.log(currentStageArr[14]);
        trainingPlanArr[7].push(currentStageArr[14]);
        for (var j = 0; j < 7; j++) {
          if(currentDateDay===currentStageArr[(2*j)]){
            trainingPlanArr[4].push(currentStageArr[(2*j)+1][0]);
            trainingPlanArr[5].push(currentStageArr[(2*j)+1][1]);
            trainingPlanArr[6].push(currentStageArr[(2*j)+1][2]);
          }
        }
      }


        trainingPlanArr[1].push(i+1);
        trainingPlanArr[2].push(currentDate);
        // console.log(numberOfTrainingWeeksRest);

        const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
        const n = weekday[currentDateDay];

        trainingPlanArr[3].push(n);

    }
    // console.log(trainingPlanArr[1]);
    // console.log(trainingPlanArr[2]);
    // console.log(trainingPlanArr[3]);
    // console.log(trainingPlanArr[4]);
    // console.log(trainingPlanArr[5]);
    // console.log(trainingPlanArr[6]);
    // console.log();

    console.log(trainingPlanArr[1][0]);
    console.log(trainingPlanArr[2][0]);
    console.log(trainingPlanArr[3][0]);
    console.log(trainingPlanArr[4][0]);
    console.log(trainingPlanArr[5][0]);
    console.log(trainingPlanArr[6][0]);
    console.log(trainingPlanArr[7][0]);
  } //and of making training periods

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
