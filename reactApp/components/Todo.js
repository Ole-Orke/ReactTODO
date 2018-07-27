import React from "react";

class Todo extends React.Component {
  constructor(props){
    super(props);
  }

  render() {

    var line = this.props.task.completed ? "line-through" : "none";
    var todostyle = {textDecoration: line}
    return (
      <li style={todostyle}><button className="btn btn-danger">X</button>{this.props.task.taskText}</li>
    )
  }
}

export default Todo;
