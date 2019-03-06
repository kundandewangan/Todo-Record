import React, { Component } from 'react';
import Todos from './Components/Todos.js';


class App extends Component {

  state={
    todos:[
      {
        id:1,
        title:"Ohhhh mama",
        completed:false
      },
      {
        id:2,
        title:"Go everyone",
        completed:false
      },
      {
        id:3,
        title:"Yo yo funny singh",
        completed:false
      }
    ]
  }
  render() {
    
    return (
      <div className="App">
        <Todos todos={this.state.todos}/>
      </div>
    );
  }
}

export default App;
