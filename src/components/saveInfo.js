import React, { Component }  from 'react';

export class SaveInfo extends Component {

  closeSaveInfoAndIsblock=(e)=>{
    e.preventDefault();
    if ( typeof this.props.closeSaveInfoAndIsblock === 'function' ){
        this.props.closeSaveInfoAndIsblock()
    }
  }

  render() {
      if(this.props.saveInfo){
        return (
          <div>
            <p>Trening został właśnie zapisany na Twoje konto</p>
            <button onClick={this.closeSaveInfoAndIsblock}>OK</button>
          </div>
        )
      } else if(this.props.isBlocking){
        return (
          <div>
            <p>Trening nie mógł być zapisany ponieważ te konto już istnieje lub ma przypisany trening</p>
            <button onClick={this.closeSaveInfoAndIsblock}>OK</button>
          </div>
        )
      } else {
        return null;
      }
    }
  };
