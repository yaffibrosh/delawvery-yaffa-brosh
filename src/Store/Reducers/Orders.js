import produce from 'immer';
import createReducer from './ReducerUtil';


const initialState = {
    orders: [],
};



const myOrders = {
    initialOrders(state, action) {
        state.orders = action.payload;
    },
    addOrder(state, action) {
        state.orders = state.orders.concat(action.payload);
    },
    removeOrder(state, action) {
        state.orders = state.orders.filter((x) => x._id !== action.payload);
    },
    updateOrder(state, action) {
        state.orders = state.orders.map(
            (element) => {
                if (element._id === action.payload._id)
                    return action.payload;
                return element;
            })
    },

};

export default produce(
    (state, action) => createReducer(state, action, myOrders ),
    initialState
);
