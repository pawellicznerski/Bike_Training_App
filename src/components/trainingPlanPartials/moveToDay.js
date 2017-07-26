import React, { Component }  from 'react';
import { test, regeneration, aerobicEndurance, strenghtAndSpeed, strenghtEndurance, dayOff, marathonSimulation, dayOffOrRegeneration}  from '../stringsAndConsts/infoIconTexts.js';


export class MoveToDay extends Component {
  constructor(props) {
  super(props);
  this.state = {
      showInfoText:false,
      currentText:"",
      scrollX:"",
      scrollY:"",
    };
  this.handleScroll = this.handleScroll.bind(this)
  } //props end

  componentDidMount(){
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount(){
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll(e){
    e.preventDefault();
    const x=window.scrollX;
    const y=window.scrollY;
    // window.onscroll=function(){window.scrollTo(x, y);};
    this.setState({
      scrollX: x,
      scrollY:y,
    })
  // if (window.scrollY > window.innerHeight-67) {
  //   this.setState({
  //     topScrollBtn:true,
  //     });
  // } else if(window.scrollY < window.innerHeight-67){
  //   this.setState({
  //     topScrollBtn:false,
  //     });
  // }
  }

  returnToTop(e){
    e.preventDefault();
    window.scrollTo(0,0);
  }

  closeInfoWindow=(e)=>{
    e.preventDefault();
    this.enableScrolling()
    this.setState({
        showInfoText:false,
      });
  }

  showInfo=(e)=>{
    e.preventDefault();

  }
  handleInputChange=()=>{

  }



  render() {
        return (
          <div id="moveToDay-CNT">
            <p>{this.state.scrollY}</p>
              <input
                type="number"
                value={this.state.weight}
                onChange={this.handleInputChange}
                placeholder="Wpisz dzień"
                min="1"
                max=""
                pattern="[3-9]/d$"
                name="noDay"
              />
          </div>
        )
      }
};
