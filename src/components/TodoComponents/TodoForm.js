import React from "react";

class ToDoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newTask: ""
    };
  }

  handleInput = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    return (
      <form onSubmit={e => this.props.handleSubmit(e, this.state.newTask)}>
        <input
          value={this.state.newTask}
          name="newTask"
          placeholder="new task..."
          onChange={this.handleInput}
        />
        <button type="submit">+</button>
      </form>
    );
  }
}

export default ToDoForm;
