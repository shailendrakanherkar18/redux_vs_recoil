
import { createStore } from 'redux';
import rootReducer from  './core/rootReducer';

const store = createStore(
  rootReducer,
  {}, //initial state
  //middleware e.g saga
);

export default store;