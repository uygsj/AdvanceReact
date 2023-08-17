import './ExpensesItem.css'
import ExpenseDate from './ExpenseDate';

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
    const deleteExpenseHandler = () => {
        const expenseItem = document.querySelector('.expense-item');
        expenseItem.remove();
    };

    return (
        <div className='expense-item'>
            <ExpenseDate date={props.date} />
            <h2>Expense Details</h2>
            <ExpenseDetails amount={props.amount} location={props.location} title={props.title} />
            <button onClick={deleteExpenseHandler}>Delete Expense</button>
        </div>
    );
}

export default ExpenseItem;


