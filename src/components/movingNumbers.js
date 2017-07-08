import React, { Component } from 'react';


export class MovingNumbers extends Component {
  constructor(props) {
  super(props);
  this.state = {
    active: false,
    noOfclass:0,
    };
    // this.handleScroll = this.handleScroll.bind(this)

  } //props end

  setClassName(noOfclassConst){
    const classArr=['moving-numbers0','moving-numbers1','moving-numbers2','moving-numbers3'];
    this.setState({
      currentClassName:classArr[noOfclassConst],
    })
  }

  componentDidMount(){

    // window.addEventListener('scroll', this.handleScroll);

    // this.intervalId2 = setInterval(() => {
    //
    //   if(!this.state.changeofstate){
    //       if(this.state.noOfkm>=9){
    //         this.setState({
    //           noOfkm: 3,
    //           noOfkmAction:true,
    //           changeofstate:true,
    //         });
    //       } else{
    //         this.setState({
    //           noOfkm: (this.state.noOfkm + 2),
    //           noOfkmAction:true,
    //           changeofstate:true,
    //         });
    //       }
    //     } else {
    //       this.setState({
    //         noOfkmAction:false,
    //         changeofstate:false,
    //       });
    //     }
    //   },1500 ,
    // );


  this.intervalId3 = setInterval(() => {
        if(this.state.noOfclass===3){
          this.setState({
            noOfclass:0,
            active:true,
          });
          const noOfclassConst=this.state.noOfclass;
          console.log(noOfclassConst);
        } else {
          this.setState({
            noOfclass:this.state.noOfclass+1,
            active:true,
          });
          const noOfclassConst=this.state.noOfclass;
          console.log(noOfclassConst);

        }
        this.setClassName(this.state.noOfclass);
      },1000 ,
    );
  }



  componentWillUnmount(){
    // clearInterval(this.intervalId);
    // clearInterval(this.intervalId2);
    clearInterval(this.intervalId3);
    // window.removeEventListener('scroll', this.handleScroll);
  }

  render(){
    return(<p className={this.state.active?this.state.currentClassName:'moving-numbers0'}>{300+(200*this.state.noOfclass)}</p>
    )
  }//end of render
}
// <div className={this.state.noOfkmAction?"moving-numbers":"staying-numbers"}>{this.state.noOfkm}00km</div>
