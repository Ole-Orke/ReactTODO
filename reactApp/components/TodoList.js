import React from "react";
import Todo from "./Todo.js";
import InputLine from "./InputLine.js";

class TodoList extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div>
        <InputLine />
        <ul>
          {this.props.todos.map((item) => <Todo task={item} />)}
        </ul>
      </div>
    )
  }
}

export default TodoList;
