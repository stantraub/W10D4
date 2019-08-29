
import { RECEIVE_TODO, todos } from "../actions/todo_actions";
import { RECEIVE_TODOS, receiveTodos } from "../actions/todo_actions";

const initialState = {
  1: {
    id: 1,
    title: "wash car",
    body: "with soap",
    done: false
  },
  2: {
    id: 2,
    title: "wash dog",
    body: "with shampoo",
    done: true
  }
};

const todosReducer = (state = initialState, action) => {
  Object.freeze(state);
  let nextState = Object.assign({}, state);
  console.log(nextState);
  console.log(action.todos);
  switch (action.type) {
    case RECEIVE_TODOS:
      
      // for (let i = 0; i < action.todos.length; i++) {

      //   nextState[action.todos[i].id+1] = action.todos[i][i+1];
      // }

      nextState = action.todos;
      return nextState;
      // return receiveTodos(todos);

    case RECEIVE_TODO:
      nextState[action.todo.id] = action.todo;
      return nextState;
    default:
      return state;
  }
};

export default todosReducer;