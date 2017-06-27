import React, { Component } from 'react';

export class TrainingDay extends Component {
  constructor(props) {
  super(props);
  this.state = {
    }
}

renderTrDay=(arr)=> {
  return (
    <div className="comment" key={arr[0]}>
    {arr[0]}{arr[1]}{arr[2]}{arr[3]}{arr[4]}{arr[5]}{arr[6]}
    </div>
  )
}


render() {
  return (
      <div className="App">
      {this.props.trainingPlanArr.map(arr=>this.renderTrDay(arr))}
      </div>
  );
}

}//end of App
