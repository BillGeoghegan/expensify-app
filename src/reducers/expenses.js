// EXPENSES REDUCER:
// Default object:
const expensesReducerDefaultState = [];
// Reducer:
export default (state = expensesReducerDefaultState, action) => {
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
        case 'SET_EXPENSES':
            return action.expenses;        
        default:
            return state;
    }
};

