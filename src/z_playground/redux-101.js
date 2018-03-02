import { createStore} from 'redux';


//destructing a method
const add = (data) => {
    return data.a + data.b;
};
console.log(add({a:1,b:12}));

//store must have function taken as variable
//what to do when state has changed

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
const store = createStore((state = {count: 0}, action)=> {
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
});



//Run when it changes
const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
}); 
// call unsubscribe(); to stop the updates.

//state changes
// store.dispatch({
//         type: 'INCREMENT',
//         incrementBy: 5
//     });

//references to state changes to avoid typos on state calls
store.dispatch(incrementCount({incrementBy: 12}));
store.dispatch(decrementCount({decrementBy: 555}));
store.dispatch(resetCount());
store.dispatch(setCount({count: 666}));