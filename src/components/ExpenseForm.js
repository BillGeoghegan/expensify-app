import React from 'react';
// Moment for date object
import moment from 'moment';
// Date picker and styles
import { SingleDatePicker } from 'react-dates';


export default class ExpenseForm extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            description: props.expense ? props.expense.description : '',
            note: props.expense ? props.expense.note : '',
            amount: props.expense ? (props.expense.amount/100).toString() : '',
            createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
            calendarFocused: false,
            error: undefined
        };
    }
    onDescriptionChange = (e) => {
        const description = e.target.value;
        this.setState(() => ({ description }));
    };
    onNoteChange = (e) => {
        const note = e.target.value;    //must set it to variable as it's a live state and constantly changing...
        this.setState(() => ({ note }))
    };
    onAmountChange = (e) => {
        const amount = e.target.value;
        // Regex:
        // If starts with (^) a digit (d) as between 1 and infinity ({1,})
        // And COULD ('(\.\d{0,2})?') include a '.' followed by a digit that is between 0 and 2 characters long
        // And ends after that ($)
        if(!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
            this.setState( () => ({amount}));
        }
    };
    onDateChange = (createdAt) => {
        if(createdAt){
            this.setState( () => ({createdAt}));
        }        
    };
    onFocusChange = ({focused}) => {
        this.setState( () => ({calendarFocused: focused}));
    };
    onSubmit = (e) => {
        e.preventDefault();
        if(!this.state.description || !this.state.amount){
            // Set error state equal to 'Please provide description and amount.'
            this.setState( () => ({error: 'Please provide description and amount.'}));
        } else {
            // Clear the error
            this.setState( () => ({error: undefined}));
            this.props.onSubmit({
                description: this.state.description,
                amount: parseFloat(this.state.amount,10) * 100, //parse from string 
                createdAt: this.state.createdAt.valueOf(),      //get moment value
                note: this.state.note
            })
            console.log('Submitted.');
        }
    };
    render() {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.onSubmit}>
                    <input
                        type="text"
                        placeholder="Description"
                        autoFocus
                        value={this.state.description}
                        onChange={this.onDescriptionChange}
                    />
                    <input
                        type="number"
                        placeholder="Amount"
                        value={this.state.amount}
                        onChange={this.onAmountChange}
                    />
                    <SingleDatePicker 
                        date={this.state.createdAt}
                        onDateChange={this.onDateChange}
                        focused={this.state.calendarFocused}
                        onFocusChange={this.onFocusChange}
                        numberOfMonths={1}              //Show only one month picker instead of 2 default
                        isOutsideRange={() => false}    //Make every day false without any logic test
                    />
                    <textarea
                        placeholder="Add a note for your expense (optional)"
                        value={this.state.note}
                        onChange={this.onNoteChange}
                    >
                    </textarea>
                    <button
                        type="submit"
                        value="Submit"
                    >Add Expense</button>
                </form>
            </div>
        )
    }
}