import React, { Component }  from 'react';

export class SaveInfo extends Component {

  closeSaveInfoAndIsblock=(e)=>{
    e.preventDefault();
    if ( typeof this.props.closeSaveInfoAndIsblock === 'function' ){
        this.props.closeSaveInfoAndIsblock()
    }
  }

  removeAccountCondition=(e)=>{
    e.preventDefault();
    if ( typeof this.props.removeAccountCondition === 'function' ){
        this.props.removeAccountCondition()
    }
  }

  render() {
      if(this.props.saveInfo){
        return (
          <div className="notEnoughTimeToPrepareWarningDiv">
            <p className="areyousure-txt">Trening został właśnie zapisany na Twoje konto</p>
            <button className="return-fillInForm-btn" onClick={this.closeSaveInfoAndIsblock}>OK</button>
          </div>
        )
      } else if(this.props.isBlocking){
        return (
          <div className="notEnoughTimeToPrepareWarningDiv">
            <p className="areyousure-txt">Trening nie mógł być zapisany ponieważ te konto już istnieje lub ma przypisany trening</p>
            <button className="return-fillInForm-btn" onClick={this.closeSaveInfoAndIsblock}>OK</button>
          </div>
        )
      } else if(this.props.isBlockingRemove){
        return (
          <div className="notEnoughTimeToPrepareWarningDiv">
            <p className="areyousure-txt">Czy na pewno chcesz usunąć trening?</p>
            <button className="return-fillInForm-btn" onClick={this.removeAccountCondition}>Tak</button>
            <button className="load-trainingPlan-btn" onClick={this.closeSaveInfoAndIsblock}>Nie</button>
          </div>
        )
      }  else if(this.props.removeInfo){
        return (
          <div className="notEnoughTimeToPrepareWarningDiv">
            <p className="areyousure-txt">Trening został usuniety.</p>
            <button className="return-fillInForm-btn" onClick={this.closeSaveInfoAndIsblock}>OK</button>
          </div>
        )
      } else {
        return null;
      }
    }
  };
