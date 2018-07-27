import React from "react";

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

export default InputLine;
