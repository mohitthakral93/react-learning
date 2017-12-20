import React from 'react';
import Todo from "../layout/todo"
import TodoStore from "../stores/TodoStores"
import * as TodoActions from "../../actions/TodoActions"

export default class Todos extends React.Component{
  constructor(){
    super();

    this.state = {
      todos :TodoStore.getAll(),
      value1 : '',
    };

  }

  componentWillMount(){
    TodoStore.on("change",() => {
      this.setState({
        todos : TodoStore.getAll(),

      });
    });
  }

   createTodo(text){
    TodoActions.createTodo(text);
  }

  reloadTodos(){
   TodoActions.reloadTodos();
 }

  handleChange(e){
    const value1 = e.target.value;
    this.setState({
      value1
    });
  }

  render(){
    const {todos} = this.state;
    const toDosComps = todos.map((todo) => {
    return <Todo key = {todo.id} {...todo}/>;
    });
    return(
      <div>
        <h1>Todos</h1>
        <input type = "text"  value = {this.state.value1} onChange = {this.handleChange.bind(this)}/>
        <button class="btn" onClick={this.createTodo.bind(this,this.state.value1)}>Create</button>
        <br/>
        <button class="btn" onClick={this.reloadTodos.bind(this)}>Reload!</button>
        <ul>{toDosComps}</ul>
      </div>
    );
  }
}
