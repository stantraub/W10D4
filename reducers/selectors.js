

const allTodos = ( state ) => {
  // return Object.keys(state.todos).map((id) => {
  //   return id;
  // });
  
  console.log(Object.keys(state.todos).map(id => state.todos[id]));
  console.log(state.todos);
  return Object.keys(state.todos).map(id => state.todos[id])
  //return state.todos;
  
}

export default allTodos;