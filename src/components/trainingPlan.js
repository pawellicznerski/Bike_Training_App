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
      const typeOfExercise = ["Test","Regeneracyjny:","Wytrzymałość tlenowa:","Siła mieśniowa i szybkość(młynek):","Wytrzymałość siłowa","Wolne"];
      const aerobicEnduraceExerc = ["Długa jazda:","Symulacja ultramaratonu"];
      const testExerc = ["Max tempo przez 30 min."];
      const stregthEnduranceExerc = ["Interwał:"];
      const muscleStrengthExerc = ["Interwał:"];
      const speedExerc = ["Młynek:"];
      const regenerationExerc = ['',"Wolna jazda przez:"];
      // const n2 = stages[currentDateDay];
      const stage1 = firstWeekDays;
      const stage2 = firstWeekDays+(firstTrainingQuarter*7);
      // console.log('stage2:',stage2);
      const stage3 = firstWeekDays+((firstTrainingQuarter+secondTrainingQuarter)*7);
      // console.log('stag3:',stage3);
      const stage4 = firstWeekDays+((firstTrainingQuarter+secondTrainingQuarter+thirdTrainingQuarter)*7);
      const stage5 = firstWeekDays+((firstTrainingQuarter+secondTrainingQuarter+thirdTrainingQuarter+fourthTrainingQuarter)*7);
      const stage6 = firstWeekDays+((firstTrainingQuarter+secondTrainingQuarter+thirdTrainingQuarter+fourthTrainingQuarter)*7)+raceWeekDays;

      if(i < stage1){
        trainingPlanArr[7].push(stages[0]);
        if(i===(firstWeekDays-1)){
          trainingPlanArr[4].push(typeOfExercise[0]);
          trainingPlanArr[5].push(testExerc[0]);
          trainingPlanArr[6].push(``);
        } else if(currentDateDay===0||currentDateDay%2===0){
          trainingPlanArr[4].push(typeOfExercise[1]);
          trainingPlanArr[5].push(regenerationExerc[1]);
          trainingPlanArr[6].push(`${Math.round(trainingType*(0.05+(0.005*i)))}`);
        } else if(currentDateDay%2!==0){
          trainingPlanArr[4].push(typeOfExercise[5]);
          trainingPlanArr[5].push('');
          trainingPlanArr[6].push('');
        }
      } else if(i < stage2){
        trainingPlanArr[7].push(stages[0]);
        if(i===(stage1+13)){
          trainingPlanArr[4].push(typeOfExercise[0]);
          trainingPlanArr[5].push(testExerc[0]);
          trainingPlanArr[6].push(``);
        } else if(currentDateDay===0||currentDateDay===4){
          trainingPlanArr[4].push(typeOfExercise[3]);
          trainingPlanArr[5].push(regenerationExerc[0]);
          trainingPlanArr[6].push(`Siłowy:${Math.round(0.15*(0.5*i))}(${Math.round(0.17*(0.5*i))}x(8-14)cad.), Szybkościowy:${Math.round(0.15*(0.5*i))}x(${Math.round(0.17*(0.5*i))}x${1+((Math.round(0.17*(0.4*i)))/10)})`);
        } else if(currentDateDay%2!==0){
          trainingPlanArr[4].push(typeOfExercise[5]);
          trainingPlanArr[5].push('');
          trainingPlanArr[6].push('');
        } else if(currentDateDay%2===0){
          trainingPlanArr[4].push(typeOfExercise[2]);
          trainingPlanArr[5].push(aerobicEnduraceExerc[0]);
          console.log(i);
          trainingPlanArr[6].push(`Czas:${Math.floor((80+(Math.round(1.428571429*i)))/60)}g${(80+(Math.round(1.428571429*i)))%60}min`);
        }
      } else  if(i < stage3){
        trainingPlanArr[7].push(stages[1]);
        if(i===(stage2+14)){
          trainingPlanArr[4].push(typeOfExercise[0]);
          trainingPlanArr[5].push(testExerc[0]);
          trainingPlanArr[6].push(``);
        } else if(currentDateDay===0||currentDateDay===4){
          trainingPlanArr[4].push(typeOfExercise[3]);
          trainingPlanArr[5].push(regenerationExerc[0]);
          trainingPlanArr[6].push(`Siłowy:${Math.round(0.15*(0.5*i))}(${Math.round(0.17*(0.5*i))}x(8-14)cad.), Szybkościowy:${Math.round(0.15*(0.5*i))}x(${Math.round(0.17*(0.5*i))}x${1+((Math.round(0.17*(0.4*i)))/10)})`);
        } else if(currentDateDay%2!==0){
          trainingPlanArr[4].push(typeOfExercise[5]);
          trainingPlanArr[5].push('');
          trainingPlanArr[6].push('');
        } else if(currentDateDay%2===0){
          trainingPlanArr[4].push(typeOfExercise[2]);
          trainingPlanArr[5].push(aerobicEnduraceExerc[0]);
          console.log(i);
          trainingPlanArr[6].push(`Czas:${Math.floor((80+(Math.round(1.428571429*i)))/60)}g${(80+(Math.round(1.428571429*i)))%60}min`);
        }
      }else  if(i < stage4){
        if(currentDateDay===0){
          trainingPlanArr[4].push(typeOfExercise[0]+`stage4`);
        } else if(currentDateDay%2!==0){
          trainingPlanArr[4].push(typeOfExercise[0]+`stage4`);
        } else if(currentDateDay%2===0){
          trainingPlanArr[4].push(typeOfExercise[2]+`stage4`);
        }
      } else  if(i < stage5){
        if(currentDateDay===0){
          trainingPlanArr[4].push(typeOfExercise[0]+`stage5`);
        } else if(currentDateDay%2!==0){
          trainingPlanArr[4].push(typeOfExercise[0]+`stage5`);
        } else if(currentDateDay%2===0){
          trainingPlanArr[4].push(typeOfExercise[2]+`stage5`);
        }
      } else  if(i < stage6){
        if(currentDateDay===0){
          trainingPlanArr[4].push(typeOfExercise[4]+`stage6`);
        } else if(currentDateDay%2!==0){
          trainingPlanArr[4].push(typeOfExercise[3]+`stage6`);
        } else if(currentDateDay%2===0){
          trainingPlanArr[4].push(typeOfExercise[4]+`stage6`);
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
    console.log(trainingPlanArr[4]);
    console.log(trainingPlanArr[5]);
    console.log(trainingPlanArr[6]);


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
