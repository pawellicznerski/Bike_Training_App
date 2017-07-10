import React, { Component } from 'react';



export class FooterComponent extends Component {
  constructor(props) {
  super(props);
  this.state = {
    active: true,
    };

} //props end
   toggleClass(e) {
   };


render() {
  return (
      <div className="footer-container">
        <div className="col-1"></div>
        <div className="container col-10">
          <div className="logo-white"></div>
          <div className="copy-rights">&copy; pawellicznerski</div>
        </div>
        <div className="col-1"></div>
      </div>
  );
}

}//end of footerComponent
