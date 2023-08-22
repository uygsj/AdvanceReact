import React, { useState } from 'react';
import './ExpensesItem.css';
import ExpenseDate from './ExpenseDate';
//import Card from '../UI/Card';

const ExpenseDetails = (props) => {
    return (
        <div className="expense-details">
            <p>Title: {props.title}</p>
            <p>Amount: {props.amount}</p>
            <p>Location: {props.location}</p>
        </div>
    );
}

const ExpenseItem = (props) => {
    const [title, setTitle] = useState(props.title);
    const [amount, setAmount] = useState(props.amount);

    const clickHandler = () => {
        setTitle('updated');
    }

    const changeExpenseHandler = () => {
        setAmount(100);
    }

    const deleteExpenseHandler = () => {
        const expenseItem = document.querySelector('.expense-item');
        expenseItem.remove();
    };

    return (
        
            <div className='expense-item' onClick={clickHandler}>
            <ExpenseDate date={props.date} />
            <h2>Expense Details</h2>
            <ExpenseDetails amount={amount} location={props.location} title={title} />
            <button onClick={deleteExpenseHandler}>Delete Expense</button>
            <button onClick={clickHandler}>Change Title</button>
            <button onClick={changeExpenseHandler}>Change Expense</button>
        </div>
        
        
    );
}

export default ExpenseItem;
