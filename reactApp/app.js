import React from "react";
import ReactDOM from "react-dom";

var dummyData = [
  {taskText: "Find meaning of life", completed: false},
  {taskText: "Walk the bird", completed: true },
  {taskText: "Balloon acupuncture", completed: false },
  {taskText: "Steal free samples", completed: false},
  {taskText: "Count all stars", completed: true},
]

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

  render() {
    return (
      <TodoList todos={this.state.todos}/>
    )
  }
}

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

class InputLine extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div>
        <input type="text" placeholder="Task"></input><button className="btn btn-primary" type="submit">Add</button>
      </div>
    )
  }
}

ReactDOM.render(<TodoList todos={dummyData}/>,
  document.getElementById('root'));
