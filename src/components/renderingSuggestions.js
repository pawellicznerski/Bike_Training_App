import React, { Component }  from 'react';

export class HandleRenderingSuggestions extends Component {

  contentOfSuggestion(yourExperience,placeOfRendering) {
      if(yourExperience===''){
        return <p>Wybierz najpierw poziom zaawansowania</p>
      }if(placeOfRendering===0){
        return <p>max dystans {this.handleSubmitValue(yourExperience,placeOfRendering)}</p>
      } else if (placeOfRendering===1){
        return <p>minimalny czas na przygotowania {this.handleSubmitValue(yourExperience,placeOfRendering)}</p>
      } else {
        alert("coś nie tak z warunkiem w render suggestion");
      }
    }
  handleSubmitValue(yourExperience,placeOfRendering) {
    const suggestedValues = {
      beginner:[300,40],
      middle:[600,40],
      professional:['no limits',30],
    }
    if(yourExperience==="beginner"){
      return suggestedValues.beginner[placeOfRendering]
    } else if(yourExperience==="middle"){
      return suggestedValues.middle[placeOfRendering]
    } else if(yourExperience==="professional"){
      return suggestedValues.professional[placeOfRendering]
    }
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
