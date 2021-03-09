import React from "react";

const Styles = {
  add: {
    backgroundColor: '#000',
    color: '#fff'
  },
  button: {
    backgroundColor: '#000',
    color: '#fff',
    fontSize: '1.2em',
    width: '10em',
    height: 'auto'
  }
  
};

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

  handleSubmit = e => {
    e.preventDefault();
    this.setState({
      newTask: ""
    });
    this.props.handleSubmit(e, this.state.newTask);
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          
          <input
            value={this.state.newTask}
            name="newTask"
            placeholder="new task..."
            onChange={this.handleInput}
          />

          <button type="submit" style={Styles.add}>+</button>

        </form>
        <button onClick={this.props.clearCompleted} style = {Styles.button}>clear completed</button>
      </div>
    );
  }
}

export default ToDoForm;
