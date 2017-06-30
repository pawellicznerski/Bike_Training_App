import React, { Component }  from 'react';
import {stringsRenderingSuggestions } from './strings.js';

export class AreYouSureToGoToTraining extends Component {

  returnToFillInForm=(e)=>{
    e.preventDefault();
    if ( typeof this.props.returnToFillInForm === 'function' ){
        this.props.returnToFillInForm();
    }
  }

  loadingTrainingPlan=(e)=>{
    e.preventDefault();
    if ( typeof this.props.loadingTrainingPlan === 'function' ){
        this.props.loadingTrainingPlan();
    }
  }

  render() {
    const {renderNotEnoughTimeToPrepare,renderAreYouSureToGoToTraining,numberOfTrainingDays,suggestedValues,yourExperience,dateSuggestion,} = this.props;
    const currentSuggestedValue =(yourExperience===''||dateSuggestion==='')?"": (stringsRenderingSuggestions.suggestedValues[yourExperience][dateSuggestion]);
    const renderedText = (renderNotEnoughTimeToPrepare)?<strong>Liczba dni treningowych to {numberOfTrainingDays} a sugerowana to {currentSuggestedValue} Czy jesteś pewny, że chcesz taki trening?</strong>:<strong>Czy jesteś pewny że podjałeś dobrą decyzję?</strong>;

        if(renderNotEnoughTimeToPrepare||renderAreYouSureToGoToTraining){
          return (
          <div className="notEnoughTimeToPrepareWarningDiv" style={{color:'brown'}}>
              {renderedText}
              <button className="return-fillInForm-btn" onClick={this.returnToFillInForm}>Wróć do formularza</button>
              <button className="load-trainingPlan-btn" onClick={this.loadingTrainingPlan}>Tak, zaladuj trening Men</button>
          </div>
          )
        } else {
          return null;
        }
    }
};
