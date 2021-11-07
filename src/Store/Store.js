import { createStore, combineReducers, applyMiddleware } from 'redux';
import OrderReducer from './Reducers/OrderReducer';
import OrdersReducer from './Reducers/Orders';




// const URL= "lms.leader.codes";
// const URL = "learnable.media";

const reducer = combineReducers({ OrderReducer, OrdersReducer});

const store = createStore(reducer);
// store.dispatch({ type: 'EXTRACT_JWT' });
window.store = store;
export default store;
export { reducer };