import React, { Component }  from 'react';

export class InfoIcon extends Component {
  
  showInfo=(e)=>{
    e.preventDefault();
    if(this.props.type==="Test"){

    } if else(this.props.type==="Regeneracyjny"){


    } if else(this.props.type==="Wytrzymałość tlenowa"){


    } if else(this.props.type==="Siła i szybkość"){


    } if else(this.props.type==="Wytrzymałość siłowa"){


    } if else(this.props.type==="Wolne"){


    } if else(this.props.type==="Symulacja ultramaratonu"){


    } if else(this.props.type==="Wolne lub regeneracyjny"){

    } else{
      return false;
    }
  }

  render() {
        return (
        <div className="infoIcon-CNT" onClick={this.showInfo}>
        </div>
        )
      }
};
