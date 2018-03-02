import {createStore, combineReducers} from 'redux';
import uuid from 'uuid';
// ADD_EXPENSE
const addExpense = ({description = '', note = '', amount = 0, createdAt = 0} = {}) => ({
    type: 'ADD_EXPENSE',
    expense: {
        id: uuid(),
        description,
        note,
        amount,
        createdAt
    }
});
// REMOVE_EXPENSE
const removeExpense = ({ id } = {}) => ({
    type: 'REMOVE_EXPENSE',
    id
});
// EDIT_EXPENSE
const editExpense = (id,updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
});
// SET_TEXT_FILTER
const setTextFilter = (updateText = '') => ({
    type: 'SET_TEXT_FILTER',
    updateText
});
// SORT_BY_DATE
const sortByDate = () => ({
    type: 'SORT_BY_DATE'
})
// SORT_BY_AMOUNT
const sortByAmount = () => ({
    type: 'SORT_BY_AMOUNT'
})
// SET_START_DATE
const setStartDate = (startDate) => ({
    type: 'SET_START_DATE',
    startDate
})
// SET_END_DATE
const setEndDate = (endDate) => ({
    type: 'SET_END_DATE',
    endDate
})

// EXPENSES REDUCER:
// Default object:
const expensesReducerDefaultState = [];
// Reducer:
const expensesReducer = (state = expensesReducerDefaultState, action) => {
    switch(action.type){
        case 'ADD_EXPENSE':
            //return state.concat(action.expense);Do not use push as it changes the state of the array!
            return [
                ...state,
                action.expense
            ];
        case 'EDIT_EXPENSE':
            return state.map((expense) => {
                if(expense.id === action.id){
                    return{
                        ...expense,         //Get the current expense values
                        ...action.updates   //Override them with the action updates
                    };
                }else{
                    return expense;
                }
            });
        case 'REMOVE_EXPENSE':
            return state.filter(({id}) => id !== action.id); // return all expect the one with that ID.
        default:
            return state;
    }
};
// FILTERS REDUCER:
// Default object:
const filtersReducerDefaultState = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
};
// Reducer:
const filtersReducer = (state = filtersReducerDefaultState, action) => {
    switch(action.type){
        case 'SET_TEXT_FILTER':
            return {
                ...state,
                text: action.updateText
            };
        case 'SORT_BY_AMOUNT':
            return{
                ...state,
                sortBy: 'amount'
            };
        case 'SORT_BY_DATE':
            return {
                ...state,
                sortBy: 'date'
            };
        case 'SET_START_DATE':
            return{
                ...state,
                startDate: action.startDate
            };
        case 'SET_END_DATE':
            return{
                ...state,
                endDate: action.endDate
            };
        default:
            return state;
    }
};

const demoState = {
    expenses: [{
        id: '1234567890',
        description: 'January Rent',
        note: 'This was the final payment for that address',
        amount: 190000,
        createdAt: 0
    }],
    filters: {
        text: 'rent',
        sortBy: 'amount', //date or amount
        startDate: undefined,
        endDate: undefined
    }
};

//Store creation
const store = createStore(
    combineReducers({
        expenses: expensesReducer,
        filters: filtersReducer
    })
    
);
//Get visible expenses
const getVisibleExpenses = (expenses,{text,sortBy,startDate,endDate}) => {
    return expenses.filter((expense) => {
        const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
        const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());
        return startDateMatch && endDateMatch && textMatch;
    }).sort((a,b) => {
        if(sortBy === 'date') {
            return a.createdAt < b.createdAt ? 1 : -1;
        }
        if(sortBy === 'amount'){
            return a.amount < b.amount ? 1 : -1;
        }
    });
};
//Subscribe for updates
store.subscribe(() => {
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses,state.filters);
    console.log(visibleExpenses);
});

const expenseOne = store.dispatch(addExpense({description: 'Rent' ,amount: 5500, createdAt: 400}));
const expenseTwo = store.dispatch(addExpense({description: 'coffee' ,amount: 300, createdAt: 600}));
// store.dispatch(removeExpense({ id: expenseOne.expense.id}));
// store.dispatch(editExpense(expenseTwo.expense.id, {amount: 500}));
// store.dispatch(setTextFilter('new_text_test'));
// store.dispatch(setTextFilter('coffee'));
store.dispatch(sortByAmount());
// store.dispatch(sortByDate());
// store.dispatch(setStartDate(125));
// store.dispatch(setEndDate());
// store.dispatch(setEndDate(456));

// store.dispatch(setStartDate(500));