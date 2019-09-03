import React from "react";
import ToDoList from "./components/TodoComponents/TodoList";
import ToDoForm from "./components/TodoComponents/TodoForm";
class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  state = {
    todos: [
      {
        task: "Organize Garage",
        id: 1528817077286,
        completed: false
      },
      {
        task: "Bake Cookies",
        id: 1528817084358,
        completed: false
      }
    ]
  };

  handleSubmit = (e, newTask) => {
    e.preventDefault();
    let taskShape = {
      task: newTask,
      id: Date.now(),
      completed: false
    };
    this.setState(prev => ({
      todos: [...prev.todos, taskShape]
    }));
  };

  toggleCompleted = id => {
    const toDoById = this.state.todos.map(todo => {
      return todo.id === id ? { ...todo, completed: !todo.completed } : todo;
    });
    this.setState({
      todos: toDoById
    });
  };

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <ToDoList
          todos={this.state.todos}
          toggleCompleted={this.toggleCompleted}
        />
        <ToDoForm handleSubmit={this.handleSubmit} />
      </div>
    );
  }
}

export default App;
