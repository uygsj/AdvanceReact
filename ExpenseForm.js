import './ExpenseForm.css'
const ExpenseForm = () => {

    const titleChangeHandler = (event) =>{
        console.log(event.target.value)

    }
    return (
        <form>
        <div className='new-expense_controls'>
            <div className='new-expense_control'></div>
            <label>Title</label>
            <input type='text' onChange={titleChangeHandler}/>
            </div>

     <div className='new-expense_control'>
     <label>Amount</label>
     <input type='number' min="0.01" step="0.01" />
     </div>

     <div className='new-expense_control'>
     <label>Date</label>
     <input type='number' min="2022-01-02" max="2023-01-12" />
     </div>

     <div className="new-expense_actions">
        <button type='submit'>Add Expense</button>
     </div>
</form>
    )
}
export default ExpenseForm