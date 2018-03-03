import selectExpensesTotal from '../../selectors/expenses-total';
import expenses from '../fixtures/expenses';

test('Should return 0 value if empty array', () => {
    const total = selectExpensesTotal([]);
    expect(total).toBe(0);
    console.log(total);
});

test('Should return value of one item', () => {
    const total = selectExpensesTotal([expenses[0]]);
    expect(total).toBe(195);
});

test('Should return total value of all items', () => {
    const total = selectExpensesTotal(expenses);
    expect(total).toBe(114195);
});