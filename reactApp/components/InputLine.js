import React from "react";

class InputLine extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div>
        <input type="text" placeholder="Task"></input><button onClick={(task) => this.props.submit(task)} className="btn btn-primary" type="submit">Add</button>
      </div>
    )
  }
}

export default InputLine;
