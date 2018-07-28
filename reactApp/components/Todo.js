import React from "react";

class Todo extends React.Component {
  constructor(props){
    super(props);
  }

  render() {

    var line = this.props.task.completed ? "line-through" : "none";
    var todostyle = {textDecoration: line}
    return (
      <li style={todostyle}><button onClick={() => this.props.XClick(this.props.task.taskText)} className="btn btn-light">❌</button>{this.props.task.taskText}<button onClick={() => this.props.toggleClick(this.props.task.taskText)} className="btn btn-light">✔️</button></li>
    )
  }
}

export default Todo;
