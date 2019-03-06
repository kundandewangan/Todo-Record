//type 'rce' then press tab button to get the react class based component boiler plate
import React, { Component } from 'react' 
import PropTypes from 'prop-types';


export class Todoitem extends Component {
  render() {
    return (
      <div>
        <p>{this.props.todo.title}</p>
      </div>
    )
  }
}
//PropTypes
Todoitem.PropTypes={
    todo: PropTypes.object.isRequired 
  }
export default Todoitem
