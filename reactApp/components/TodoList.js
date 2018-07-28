import React from "react";
import Todo from "./Todo.js";

class TodoList extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div>
        <ul>
          {this.props.todos.map((item) => <Todo toggleClick={(name) => this.props.todoToggleClick(name)} XClick={(index) => this.props.todoXClick(index)} task={item} />)}
        </ul>
      </div>
    )
  }
}

export default TodoList;
