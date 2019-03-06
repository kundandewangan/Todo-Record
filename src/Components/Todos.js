import React, { Component } from 'react';
import Todoitem from './Todoitem';
import PropTypes from 'prop-types';
class Todos extends Component {
  render() {
    //console.log(this.props.todos)
    return this.props.todos.map((todo)=>     //map is high order array method can return array from array, we are using it here to loop through and output the jsx
    (
      <Todoitem key={todo.id} todo={todo}/>
    ));
  }
}

export default Todos;
