import {EventEmitter} from 'events';


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
}

const todoStore = new TodosStore;

window.todoStore = todoStore;

export default todoStore;
