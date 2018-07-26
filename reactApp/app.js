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
      <ul>
        {dummyData.map((item) => <Todo task={item} />)}
      </ul>
    )
  }
}

class Todo extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <li><button>X</button>{this.props.task}</li>
    )
  }
}

ReactDOM.render(<TodoList />,
  document.getElementById('root'));
