import React, { useState } from 'react';
import ExpenseItem from './components/Expenses/ExpenseItem';
import NewExpense from './components/NewExpense/NewExpense';
import Expenses from './components/Expenses/Expenses';

const App = () => {
    const initialExpenses = [
        {
            id: 'e1',
            title: 'Travel',
            location: 'Airport',
            amount: 100,
            date: new Date('2023-08-12')
        },
        {
            id: 'e2',
            title: 'Clothes',
            location: 'Mall',
            amount: 50,
            date: new Date('2023-08-10')
        },
        {
            id: 'e3',
            title: 'House',
            location: 'Pune',
            amount: 700000,
            date: new Date('2022-07-25')
        }
    ];

    const [expenses, setExpenses] = useState(initialExpenses);
    const [filteredYear, setFilteredYear] = useState('');

    const addExpenseHandler = expense => {
        setExpenses(prevExpenses => [expense, ...prevExpenses]);
    };
    const filterChangeHandler = selectedYear => {
        setFilteredYear(selectedYear);
    };

    const filteredExpenses = expenses.filter(expense => {
        if (!filteredYear) {
            return true; // If no year is selected, show all expenses
        }
        return expense.date.getFullYear().toString() === filteredYear;
    });


    return (
        <div>
            <NewExpense onAddExpense={addExpenseHandler} />
            <Expenses items={expenses} onFilterChange={filterChangeHandler} />
            {filteredExpenses.map((item) => {
            return<ExpenseItem 
            key={item.id}
            title={item.title} 
            amount={item.amount} 
            date={item.date} 
           >
           </ExpenseItem>
        })}
        </div>
    );
}

export default App;
