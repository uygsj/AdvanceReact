import { useState } from 'react';
import React from 'react';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import ExpenseFilter from './ExpenseFilter';
import './Expenses.css';

const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState('2020'); 

    const filterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear);
    };

    const filteredExpenses = props.items.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear;
    });

    let expenseContent;

    if (filteredExpenses.length === 0) {
        expenseContent = <p>No Expense Found</p>;
    } else if (filteredExpenses.length === 1) {
        expenseContent = (
            <div>
                <ExpenseItem
                    key={filteredExpenses[0].id}
                    title={filteredExpenses[0].title}
                    amount={filteredExpenses[0].amount}
                    date={filteredExpenses[0].date}
                />
                <p>Only single Expense here. Please add more...</p>
            </div>
        );
    } else {
        expenseContent = filteredExpenses.map((expense) => (
            <ExpenseItem
                key={expense.id}
                title={expense.title}
                amount={expense.amount}
                date={expense.date}
            />
        ));
    }

    return (
        <div>
            <Card className='expenses'>
                <ExpenseFilter
                    selected={filteredYear}
                    onChangeFilter={filterChangeHandler}
                />
                {expenseContent}
            </Card>
        </div>
    );
};

export default Expenses;
