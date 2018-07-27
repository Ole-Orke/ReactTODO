import React from "react";
import TodoList from "./TodoList.js";
import InputLine from "./InputLine.js";

var dummyData = [
  {taskText: "Find meaning of life", completed: false},
  {taskText: "Walk the bird", completed: true },
  {taskText: "Balloon acupuncture", completed: false },
  {taskText: "Steal free samples", completed: false},
  {taskText: "Count all stars", completed: true},
];

class TodoApp extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      todos: []
    }
  }

  componentDidMount() {
    this.setState({
      todos: dummyData
    });
  }

  addTodo(task){
    dummyData = dummyData.concat({taskText: task, completed: false});
    this.setState({
      todos: dummyData
    });
  }

  render() {
    return (
      <div>
      <InputLine submit={(task) => this.addTodo(task)}/>
      <TodoList todos={this.state.todos}/>
    </div>
    )
  }
}

export default TodoApp;
