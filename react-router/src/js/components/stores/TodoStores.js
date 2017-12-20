import {EventEmitter} from 'events';
import dispatcher from "../dispatchers/dispatcher";


class TodosStore extends EventEmitter{
  constructor(){
    super();
    this.todos = [
      {
        id : 2113241134,
        text : "Go To Mall For Shopping",
        complete : false
      },{
        id : 2113241135,
        text : "Go For Running",
        complete : true
      }
    ];
  }

  createTodo(text,complete){
    const id = Date.now();
    this.todos.push({
      id,
      text,
      complete
    });
    this.emit("change");
  }

  getAll(){
    return this.todos;
  }

  handleActions(action){
    switch (action.type) {
      case "CREATE_TODO":
          this.createTodo(action.text,action.complete);
        break;
        case "RECEIVE_TODOS":
        this.todos = action.todos;
        this.emit("change");
      }

  }
}

const todoStore = new TodosStore;

dispatcher.register(todoStore.handleActions.bind(todoStore));

window.dispatcher = dispatcher;

window.todoStore = todoStore;

export default todoStore;
