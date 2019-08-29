
export const RECEIVE_TODO = "RECEIVE_TODO";
export const RECEIVE_TODOS = "RECEIVE_TODOS";


export const todos = {
  type: RECEIVE_TODOS,
  todo: {
    1: {
      id: 1,
      title: 'wash car',
      body: 'with soap',
      done: false
    },
    2: {
      id: 2,
      title: 'wash dog',
      body: 'with shampoo',
      done: true
    },
  }

};

// export const todos = [
//  {
//       id: 1,
//       title: 'wash car',
//       body: 'with soap',
//       done: false
//     },
//   {
//       id: 2,
//       title: 'wash dog',
//       body: 'with shampoo',
//       done: true
//   }
// ];
export const todo = {
  type: RECEIVE_TODO,
  todo: {
    id: 1,
    title: 'pass A06',
    body: 'really easy',
    done: false 
  }
};

export const receiveTodo = (todo) => ({
  type: RECEIVE_TODO,
  todo
});

export const receiveTodos = (todos) => {
  let result = {
    type: RECEIVE_TODOS,
    todos: {}
  }
  for (let i = 0; i < todos.length; i++) {
    result.todos[i + 1] = todos[i];
  }
  return result;
};