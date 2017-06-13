import React, { Component }  from 'react';
import {stringsRenderingSuggestions } from './strings.js';

export class NotEnoughTimeToPrepareWarning extends Component {
  returnToFillInForm=(e)=>{
    e.preventDefault();
    if ( typeof this.props.returnToFillInForm === 'function' ){
        this.props.returnToFillInForm()
    }
  }

  loadTrainingPlanWithoutSuggestions=(e)=>{
    e.preventDefault();
    if ( typeof this.props.loadTrainingPlanWithoutSuggestions === 'function' ){
        this.props.loadTrainingPlanWithoutSuggestions()
    }
  }

  render() {
    const {renderNotEnoughTimeToPrepare,numberOfTrainingDays,suggestedValues,yourExperience,dateSuggestion} = this.props;
    const currentSuggestedValue =(yourExperience===''||dateSuggestion==='')?"": (stringsRenderingSuggestions.suggestedValues[yourExperience][dateSuggestion]);

        if(renderNotEnoughTimeToPrepare){
          return (
          <div className="notEnoughTimeToPrepareWarningDiv" style={{color:'brown'}}>
              <strong>Liczba dni treningowych to {numberOfTrainingDays} a sugerowana to {currentSuggestedValue} Czy jesteś pewny, że chcesz taki trening?</strong>
              <button className="return-fillInForm-btn" onClick={this.returnToFillInForm}>Wróć do formularza</button>
              <button className="load-trainingPlan-btn" onClick={this.loadTrainingPlanWithoutSuggestions}>Tak, zaladuj trening Men</button>
          </div>
          )
        } else {
          return null;
        }
    }
};
