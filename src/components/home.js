import React, { Component } from 'react';
import { BrowserRouter as Router,Route,Link,NavLink, Switch } from 'react-router-dom';

export class Home extends Component {
  constructor(props) {
  super(props);
  this.state = {
    active: true,
    position: 0,
    currentplace:"",
    };
  } //props end

  componentDidMount(){
    this.intervalId = setInterval(() => {
      this.setState({
        position: (this.state.position + 1),
        });
    }, 30);
  }
  componentWillUnmount(){
    clearInterval(this.intervalId);
  }

  // window.onscroll = function() {scrollFunction()};
  //
  // function scrollFunction() {
  //     if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
  //         document.getElementById("myBtn").style.display = "block";
  //     } else {
  //         document.getElementById("myBtn").style.display = "none";
  //     }
  // }
  //
  // // When the user clicks on the button, scroll to the top of the document
  // function topFunction() {
  //     document.body.scrollTop = 0;
  //     document.documentElement.scrollTop = 0;
  // }

  moveDown(e){
    e.preventDefault();
    console.log("moveDown");

    if (window.scrollY > 380) {
      console.log("should lock");

      // this.setState({
      //   scrollingLock: true
      // });
    } else if (window.scrollY < 380) {
      // console.log("not locked" );
      // this.setState({
      //   scrollingLock: false
      // });
      const currentplace = (380-window.scrollY);
      console.log(  window.scrollY);
      console.log(currentplace);
      window.scrollTo(0,currentplace);
      // document.documentElement.scrollTop = 0;

    }
  }
    currentplacefn(e){
      e.preventDefault();
      this.setState({
        currentplace: window.scrollY,
      });
    }

  render(){
    return(
      <div>
        <div onScroll={this.currentplacefn} style={{position:"absolute",width:"100px",height:"100px"}}>ssss{this.state.currentplace}</div>
      <section id="home-entry">
        <div className="row home-class" style={{backgroundPosition:this.state.position}}>
          <div className="col-1">
          </div>
          <div className="welcome-text-container col-10">
            <div className="welcome-text">
              <p>Profesionalny ultramaratonowy trening rowerowy w kilka chwil.</p>
              <NavLink to={`/wyswietltrening`} style={{textDecoration:"none",color:"white"}}><div className="welcome-btn" >nowy trening</div></NavLink>
              <Route exact path={`/wyswietltrening`}/>
              <div onClick={this.moveDown}className="move-down-btn">&nabla;</div>
            </div>
          </div>
          <div className="col-1">
          </div>
        </div>
      </section>

      <section id="home-entry">
        <div className="row home-class" style={{backgroundPosition:this.state.position}}>
          <div className="col-2">
          </div>
          <div className="welcome-text2 col-8">
              <p>Profesionalny ultramaratonowy trening rowerowy w kilka chwil.</p>
              <button className="welcome-btn" ><NavLink to={`/wyswietltrening`}>nowy trening</NavLink></button>
              <Route exact path={`/wyswietltrening`}/>
          </div>
          <div className="col-2">
          </div>
        </div>
      </section>

      </div>
    )
  }
}
