import { useState } from 'react';
import React from 'react';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import ExpenseFilter from './ExpenseFilter';
import ExpensesChart from './ExpensesChart';
import './Expenses.css';
//import ExpenseDate from './ExpenseDate';

const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState('2020'); 

    const filterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear);
    };

    const filteredExpenses = props.items.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear;
    });

    let expenseContent = <p>No Expense Found</p>;

    if(filteredExpenses.length ===1)
    {
    expenseContent = filteredExpenses

    && <p>Only single Expense here. Please add more...</p>


    }

    if(filteredExpenses.length >1)
     {
    expenseContent = filteredExpenses.map((expense) => (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    ))
  }


    return (
        <div>
            <Card className='expenses'>
                <ExpenseFilter
                    selected={filteredYear}
                    onChangeFilter={filterChangeHandler}
                />
                <ExpensesChart expenses={filteredExpenses} />
                {expenseContent}
            </Card>
        </div>
    );
};

export default Expenses;
