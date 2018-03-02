import { createStore} from 'redux';

const incrementCount = ({incrementBy = 1} = {}) => ({
    type:'INCREMENT',
    incrementBy
});
const decrementCount = ({decrementBy = 1} = {}) => ({
    type:'DECREMENT',
    decrementBy
});
const resetCount = () => ({
    type:'RESET'
});
const setCount = ({count}) => ({
    type:'SET',
    count
});


//Reducer function:
// 1. Reducers are pure functions!
// 2. Never change state or action!
const countReducer = (state = {count: 0}, action)=> {
    switch (action.type){
        case 'INCREMENT':
        const incrementBy = typeof action.incrementBy === 'number' ? action.incrementBy : 1;
        return {
            count: state.count+incrementBy
        };
        case 'DECREMENT':
        const decrementBy = typeof action.decrementBy === 'number' ? action.decrementBy : 1;
        return {
            count: state.count-decrementBy
        };
        case 'RESET':
        return {
            count: 0
        };
        case 'SET':
        return {
            count: action.count
        };
        default: state;
    }
};

const store = createStore(countReducer);

//Run when it changes
const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
}); 

store.dispatch(incrementCount({incrementBy: 12}));
store.dispatch(decrementCount({decrementBy: 555}));
store.dispatch(resetCount());
store.dispatch(setCount({count: 666}));