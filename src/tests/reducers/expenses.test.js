import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

//Test default state
test('should set default state', () => {
    const state = expensesReducer(undefined, { type: "@@INIT"});
    expect(state).toEqual([]);
});

//Test removing expense by id
test('should remove expense by id', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: expenses[1].id
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([expenses[0],expenses[2]]);
});

//Test not removing expense
test('should not remove expenses if id not found', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: '-1'
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
});

//Test adding expense
test('should add a new expense', () => {
    const action = {
        type: 'ADD_EXPENSE',
        expense: expenses[0]
    };
    const state = expensesReducer(expenses,action);
    expect(state).toEqual([expenses[0],expenses[1],expenses[2],expenses[0]])
});

//Test editing an expense
test('should edit a current expense', () => {
    const action = {
        type: 'EDIT_EXPENSE',
        id: '1',
        updates:{
            description : 'Bubblegum'
        }
    };
    const state = expensesReducer(expenses,action);
    expect(state[0].description).toBe('Bubblegum');
});

//Test editing an expense
test('should edit a current expense', () => {
    const action = {
        type: 'EDIT_EXPENSE',
        id: '1',
        updates:{
            note : 'Test note'
        }
    };
    const state = expensesReducer(expenses,action);
    expect(state[0].note).toBe('Test note');
});

//Test editing an expense with an invalid ID
test('should not edit an expense because of a valid id', () => {
    const action = {
        type: 'EDIT_EXPENSE',
        id: '-1',
        updates:{
            description : 'Bubblegum'
        }
    };
    const state = expensesReducer(expenses,action);
    expect(state).toEqual(expenses);
});

test('should set expenses', () => {
    const action = {
        type: 'SET_EXPENSES',
        expenses: [expenses[1]]
    };
    const state = expensesReducer(expenses,action);
    expect(state).toEqual([expenses[1]]);
});