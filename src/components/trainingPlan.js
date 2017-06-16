import React, { Component }  from 'react';
import {stringsTrainingPlan} from './strings.js';

export class TrainingPlan extends Component {
    constructor(props) {
    super(props);
    this.state={
      loading:true,
    }
    //Pierwsza wartość inputa ustawiona na '':
    // this.state = {
    //     date:this.props.date,
    //   };
  } //props end


  componentDidMount() {
      this.makingTrainingPeriods();
  }

  makingTrainingPeriods=()=>{
    console.log(this.props.login);
    console.log(this.state.login);
    console.log(this.props.location.state.login);
  }

  preparingTrainingPlan=()=>{
    this.setState({loading: false});
  }

  preparingTrainingPlan=()=>{
    this.setState({loading: false});
  }

  // let dateMs = new Date(this.state.date).getTime();
  // console.log(dateMs);
  render(){
    if(this.state.loading){
      return <div>Loading...</div>
    } else {
      return <div>
            </div>
    }
  }//render end
}//registration form end

const {login,email,weight,height,trainingType,numberOfTrainingDays}=this.props.location;

const Comments = React.createClass({
  renderComment(comment, i) {
    return (
      <div className="comment" key={i}>
        <p>
          <strong>{comment.user}</strong>
          {comment.text}
          <button className="remove-comment" onClick={this.props.removeComment.bind(null, this.props.params.postId, i)}>&times;</button>
        </p>
      </div>
    )
  },
  handleSubmit(e) {
    e.preventDefault();
    const { postId } = this.props.params;
    const author = this.refs.author.value;
    const comment = this.refs.comment.value;
    this.props.addComment(postId, author, comment);
    this.refs.commentForm.reset();
  },
  render() {
    return (
      <div className="training-plan-chart">
        <div className="stage-basic-early">
          {this.props.postComments.map(this.renderComment)}
        </div>
        <div className="stage-basic-late">
          {this.props.postComments.map(this.renderComment)}
        </div>
        <div className="stage-gain">
          {this.props.postComments.map(this.renderComment)}
        </div>
        <div className="stage-before-start">
          {this.props.postComments.map(this.renderComment)}
        </div>
        <div className="stage-startweek">
          {this.props.postComments.map(this.renderComment)}
        </div>
      </div>
    )
  }
});
