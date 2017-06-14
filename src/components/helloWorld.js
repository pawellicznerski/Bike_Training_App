import React, { Component }  from 'react';

export class HelloWorld extends Component {
    render() {
      console.log(this.props.location.state.helloWorld)
      return <p>{this.props.location.state.helloWorld}</p>
    }
};
