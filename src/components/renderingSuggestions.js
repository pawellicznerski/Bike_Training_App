import React, { Component }  from 'react';
import { stringsRenderingSuggestions }  from './strings.js';

export class HandleRenderingSuggestions extends Component {

  contentOfSuggestion(yourExperience,placeOfRendering) {
      if(yourExperience===''){
        return <p>Wybierz najpierw poziom zaawansowania</p>
      }if(placeOfRendering===0){
        return <p>max dystans {this.handleSubmitValue(yourExperience,placeOfRendering)} km</p>
      } else if (placeOfRendering===1){
        return <p>minimalny czas na przygotowania {this.handleSubmitValue(yourExperience,placeOfRendering)} tygodni</p>
      } else {
        console.log("coś nie tak z warunkiem w render suggestion");
      }
    }
  handleSubmitValue(yourExperience,placeOfRendering) {
    const suggestedValues = stringsRenderingSuggestions.suggestedValues;
    return suggestedValues[yourExperience][placeOfRendering]
  }


  render() {
    const {yourExperience,placeOfRendering} = this.props;
      return (
        <div className="formSuggestion">
          <div style={{color:'blue'}}>
            <strong>Sugestia:</strong>
            {this.contentOfSuggestion(yourExperience,placeOfRendering)}
          </div>
        </div>
      )
    }
};
