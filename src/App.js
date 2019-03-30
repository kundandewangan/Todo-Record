import React, { Component } from "react";
import Todos from "./Components/Todos.js";
import AddTodos from "./Components/AddTodos.js";

class App extends Component {
  state = {
    todos: [
      { id: 1, title: "Ohhhh mama" },
      { id: 2, title: "Go everyone" },
      { id: 3, title: "Yo yo funny singh" }
    ]
  };

  deleteTodo = id => {
    //console.log(id);
    const todos = this.state.todos.filter(todo => {
      return todo.id !== id;
    });
    this.setState({
      todos
    });
  };

  addTodo = todo => {
    let { add } = this.state;
    todo.id = Math.random();
    let todos = [...add, todo];
    this.setState({
      todos
    });
  };

  render() {
    return (
      <div className="todo-app container">
        <h1 className="center blue-text">Todo's</h1>
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} />
        <AddTodos addTodo={this.addTodo} />
      </div>
    );
  }
}

export default App;
