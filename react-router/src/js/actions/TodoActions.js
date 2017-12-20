import dispatcher from "../components/dispatchers/dispatcher";

export function createTodo(text){
  dispatcher.dispatch({
    type : "CREATE_TODO",
    text,
  });
}

export function deleteTodo(id){
  dispatcher.dispatch({
    type : "DELETE_TODO",
    id,
  });
}

export function reloadTodos(){
  dispatcher.dispatch({
    type : "FETCHING_TODOS",
  });

  setTimeout(()=>{
    dispatcher.dispatch({
      type : "RECEIVE_TODOS",todos : [
        {
          id : 211241134,
          text : "Go To Disc To Dance",
          complete : false
        },{
          id : 213241135,
          text : "Go For Running",
          complete : true
        }
      ]
    })
  },
1000);
}
