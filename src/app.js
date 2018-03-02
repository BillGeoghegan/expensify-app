import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses'
import { setTextFilter } from './actions/filters'
import getVisibleExpenses from './selectors/expenses'
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';

const store = configureStore();

//Run when it changes
const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
}); 

//Testing
store.dispatch(addExpense({description: 'Water Bill', amount: 4500, note: 'Test water bill note'}));
store.dispatch(addExpense({description: 'Gas Bill', amount: 4000, createdAt: 15121992}));
store.dispatch(addExpense({description: 'Rent', amount: 300, note: 'Test rent note', createdAt: 1000}));


const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);

const jsx = (
    <Provider store={store}>
        <AppRouter/>
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));