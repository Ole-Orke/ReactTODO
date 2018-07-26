import React from "react";
import ReactDOM from "react-dom";

var dummyData = ["Find meaning of life", "Walk the bird",
"Balloon acupuncture", "Steal free samples", "Count all stars"]

class TodoList extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div>
        <InputLine />
        <ul>
          {dummyData.map((item) => <Todo task={item} />)}
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
    return (
      <li><button class="btn btn-primary">X</button>{this.props.task}</li>
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
        <input type="text" placeholder="Task"></input><button class="btn btn-primary" type="submit">Add</button>
      </div>
    )
  }
}

ReactDOM.render(<TodoList />,
  document.getElementById('root'));
