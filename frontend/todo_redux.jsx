import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from '../store/store';
import { receiveTodo, receiveTodos } from "../actions/todo_actions"
import App from "../components/app";
import Root from "../components/root";
import allTodos from "../reducers/selectors"
document.addEventListener("DOMContentLoaded", () => {
  let root = document.getElementById('root');
  let store = configureStore();
  ReactDOM.render(<Root store={store} />, root);
  window.store = store;
  window.receiveTodos = receiveTodos;
  window.receiveTodo = receiveTodo;
  window.allTodos = allTodos;
  const newTodos = [{ id: 1, title: 'wash phillip', body: 'with soap', done: true }, { id: 2, title: 'learn redux', body: 'app academy', done: false }];
  //  store.dispatch(receiveTodo({ id: 3, title: "New Todo" }));
  store.dispatch(receiveTodos(newTodos));
});
