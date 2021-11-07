import produce from 'immer';
import createReducer from './ReducerUtil';


const initialState = {
    order: {
        _id:'0',
        firstName: '',
        lastName: '',
        date: '',
      
    }
};

const initialOrder = {
    id: '0',
    firstName: '',
    lastName: '',
    date: '',
   
 
}

const myOrder = {
    initialOrder(state, action) {
        state.order = action.payload;
    },
    initialemptyOrder(state) {
        state.order = initialOrder;
    },
  
    setOrderProp(state, action) {
        state.order[action.payload[1]] = action.payload[0];
    },

  
 

};

export default produce(
    (state, action) => createReducer(state, action, myOrder ),
    initialState
);
