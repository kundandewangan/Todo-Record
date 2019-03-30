import React, { Component } from "react";

class AddTodos extends Component {
  state = {
    title: ""
  };

  handleChange = e => {
    this.setState({
      title: e.target.value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    //console.log(this.state);
    this.props.addTodo(this.state);
    this.setState({
      title: ""
    });
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Add a new Todo</label>
          <input
            type="text"
            onChange={this.handleChange}
            value={this.state.title}
          />
        </form>
      </div>
    );
  }
}
export default AddTodos;
