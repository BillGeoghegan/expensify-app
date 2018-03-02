import filtersReducer from '../../reducers/filters';
import moment from 'moment';

//Test default values
test('should setup default filter values', () => {
    const state = filtersReducer(undefined,{type: '@@INIT'});
    expect(state).toEqual({
        text:'',
        sortBy:'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    })
});

//Test sortby to amount
test('should set sortBy to amount', () => {
    const state = filtersReducer(undefined, {type: 'SORT_BY_AMOUNT'});
    expect(state.sortBy).toBe('amount');
});

//Test sortby date
test('should set sortBy to date', () => {
    const currentState = {
        text: '',
        startDate: undefined,
        endDate: undefined,
        sortBy: 'amount'
    };
    const action = { type : 'SORT_BY_DATE'}
    const state = filtersReducer(currentState, action);
    expect(state.sortBy).toBe('date');
});

//Test text filter
test('should set text filter', () => {
    const action = { text: 'Test_value',type: 'SET_TEXT_FILTER'}
    const state = filtersReducer(undefined, action);
    expect(state.text).toEqual('Test_value');
});


//Test startDate filter
test('should set start date filter', () => {
    const action = { startDate: 1000, type: 'SET_START_DATE'}
    const state = filtersReducer(undefined, action);
    expect(state.startDate).toEqual(1000);
});

//Test endDate filter
test('should set end date filter', () => {
    const action = { endDate: 2000, type: 'SET_END_DATE'}
    const state = filtersReducer(undefined, action);
    expect(state.endDate).toEqual(2000);
});