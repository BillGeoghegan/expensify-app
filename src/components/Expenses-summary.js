import React from 'react';
import { connect } from 'react-redux';
import numeral from 'numeral';
import selectExpenses from '../selectors/expenses';
import selectExpensesTotal from '../selectors/expenses-total';

export const ExpensesSummary = ({expenseCount, expensesTotal}) => {
    const expenseWord = expenseCount === 1 ? 'expense' : 'expenses'
    const formattedExpenseTotal = numeral(expensesTotal/100).format('$0,0.00');
    if(expenseCount === 0){
        return(
            <div>
                <h1>Currently not viewing anything.</h1>
            </div>
        );
    }else{
        return(
            <div>
                <h1>Viewing {expenseCount} {expenseWord} totalling {formattedExpenseTotal}</h1>
            </div>
        );
    }
};

const MapStateToProps = (state) => {
    const visibleExpenses = selectExpenses(state.expenses, state.filters);
    return{
        expenseCount: visibleExpenses.length,
        expensesTotal: selectExpensesTotal(visibleExpenses)
    };
};

export default connect(MapStateToProps)(ExpensesSummary);