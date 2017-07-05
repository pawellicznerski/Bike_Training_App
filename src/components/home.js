import React, { Component } from 'react';
import { BrowserRouter as Router,Route,Link,NavLink, Switch } from 'react-router-dom';

export class Home extends Component {
  constructor(props) {
  super(props);
  this.state = {
    active: true,
    };
    this.toggleClass = this.toggleClass.bind(this);

} //props end

componentDidMount(){
  
}
   toggleClass(e) {
     e.preventDefault();
     const currentState = this.state.active;
     console.log( window.scrollX);
     this.setState({ active: !currentState });
     console.log(window.scrollY);
   };

  render(){
    return(
        <div className="home-class">
          <p>Witamy w naszej apce</p>
          <button ><NavLink to={`/wyswietltrening`}>cos tu sie wpisze</NavLink></button>
          <Route exact path={`/wyswietltrening`}/>
        </div>
    )
  }

}
