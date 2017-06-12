import React, { Component }  from 'react';

export class NotEnoughTimeToPrepareWarning extends Component {

  render() {
    const {renderNotEnoughTimeToPrepare,numberOfTrainingDays,suggestedValues} = this.props;
        if(renderNotEnoughTimeToPrepare){
          return (
          <div className="notEnoughTimeToPrepareWarningDiv" style={{color:'brown'}}>
              <strong>Liczba dni treningowych to {numberOfTrainingDays} a sugerowana to {suggestedValues} Czy jesteś pewny, że chcesz taki trening?</strong>
              <button className="return-fillInForm-btn" onClick={)></button>
              <button className="load-trainingPlan-btn" onClick={)></button>
          </div>
          )
        } else {
          return null;
        }
    }
};
