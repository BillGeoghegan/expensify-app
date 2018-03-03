import React from 'react';
import { shallow } from 'enzyme';
import { ExpensesSummary } from '../../components/expenses-summary';

test('Should return 0 value if empty array', () => {
    const wrapper = shallow(<ExpensesSummary expenseCount={0} expensesTotal={235} />);
    expect(wrapper).toMatchSnapshot();
});

test('Should summarize all values if passed an array', () => {
    const wrapper = shallow(<ExpensesSummary expenseCount={3} expensesTotal={24535} />);
    expect(wrapper).toMatchSnapshot();
});

test('Should summarize a single value if passed an array', () => {
    const wrapper = shallow(<ExpensesSummary expenseCount={1} expensesTotal={235} />);
    expect(wrapper).toMatchSnapshot();
});
