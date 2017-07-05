import React, { Component } from 'react';
import { BrowserRouter as Router,Route,Link,NavLink, Switch } from 'react-router-dom';

export class Home extends Component {
  constructor(props) {
  super(props);
  this.state = {
    active: true,
    };

} //props end

componentDidMount(){

}

  render(){
    return(
      <section id="home-entry">
        <div className="row home-class">
          <div className="col-2">
          </div>
          <div className="welcome-text col-8">
            <p>Witamy w naszej apce</p>
            <button ><NavLink to={`/wyswietltrening`}>cos tu sie wpisze</NavLink></button>
            <Route exact path={`/wyswietltrening`}/>
          </div>
          <div className="col-2">
          </div>
        </div>
      </section>
    )
  }
}
