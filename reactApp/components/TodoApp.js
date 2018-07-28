import React from "react";
import TodoList from "./TodoList.js";
import InputLine from "./InputLine.js";

var dummyData = [
  {taskText: "Find meaning of life", completed: false},
  {taskText: "Walk the bird", completed: true },
  {taskText: "Balloon acupuncture", completed: false },
  {taskText: "Steal free samples", completed: false},
  {taskText: "Count all stars", completed: true},
  {taskText: "Octopus bone scan", completed: false},
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

  removeTodo(name){
    let todos = this.state.todos;
    console.log(name);
    let i = 0;
    let index = null;
    todos.forEach((todo) => {
      console.log(todo);
      if (todo.taskText === name){
        index = i;
        return;
      }
      else {
        i++;
      }
    });
    console.log(index);
    todos.splice(index, 1);
    this.setState({
      todos: todos
    });
  }

  toggleTodo(name){
    let todos = this.state.todos;
    todos.forEach((todo) => {
      if(todo.taskText === name){
        if(todo.completed){
          todo.completed = false;
        }
        else {
          todo.completed = true;
        }
      }
    });
    this.setState({
      todos: todos
    });
  }

  render() {
    return (
      <div>
      <InputLine submit={(task) => this.addTodo(task)}/>
      <TodoList todoToggleClick={(name) => this.toggleTodo(name)} todoXClick={(index) => this.removeTodo(index)} todos={this.state.todos}/>
    </div>
    )
  }
}

export default TodoApp;
