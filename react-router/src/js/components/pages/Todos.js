import React from 'react';
import Todo from "../layout/todo"
export default class Todos extends React.Component{
  constructor(){
    super();

    this.state = {
      todos :[
        {
          id : 2113241134,
          text : "Go Shopping",
          complete : false
        },{
          id : 2113241135,
          text : "Go For Running",
          complete : true
        }
      ],
    };

  }
  render(){
    const {todos} = this.state;
    const toDosComps = todos.map((todo) => {
      return <Todo key = {todo.id} {...todo}/>;
    });
    return(
      <div>
        <h1>Todos</h1>
        <ul>{toDosComps}</ul>
      </div>
    );
  }
}
