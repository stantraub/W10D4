import { createStore } from 'redux';
import rootReducer from '../reducers/root_reducer';

const configureStore = (preloadedState = {}) => {
  console.log("something");
  return createStore(rootReducer, preloadedState);
}

export default configureStore;