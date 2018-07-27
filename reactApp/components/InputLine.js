import React from "react";

class InputLine extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      typedText: ""
    }
  }

  handleTyping(event) {
    this.setState({
      typedText: event.target.value
    });
  }

  handleSubmit() {
    this.props.submit(this.state.typedText);
    this.setState({
      typedText: ""
    });
  }

  render() {
    return (
      <div>
        <input onChange={(event) => this.handleTyping(event)} value={this.state.typedText} type="text" placeholder="Task"></input><button onClick={() => this.handleSubmit()} className="btn btn-primary" type="submit">Add</button>
      </div>
    )
  }
}

export default InputLine;
