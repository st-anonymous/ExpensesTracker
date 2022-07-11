import React, {useState} from "react";
import './ExpenseForm.css';

const ExpenseForm = (props) => {
    const [expenseTitle, setExpenseTitle] = useState("");
    const [expenseAmount, setExpenseAmount] = useState("");
    const [expenseDate, setExpenseDate] = useState("");
    
    const titleHandler = (event) => {
        setExpenseTitle(event.target.value);
    };
    const amountHandler = (event) => {
        setExpenseAmount(event.target.value);
    };
    const dateHandler = (event) => {
        setExpenseDate(event.target.value);
    };
    const submitHandler = (event) => {
        event.preventDefault();
        const expenseData = {
            title: expenseTitle,
            amount: +expenseAmount,
            date: new Date(expenseDate)
        }
        props.onSaveExpenseData(expenseData);
        setExpenseTitle("");
        setExpenseAmount("");
        setExpenseDate("");
    }
    const cancelHandler = () => {
        props.onCancel()
    }

    return (
    <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
            <div className="new-expense__control">
                <label>Title</label>
                <input 
                    type="text" 
                    value={expenseTitle} 
                    placeholder="Add Title" 
                    onChange={titleHandler}
                />
            </div>
            <div className="new-expense__control">
                <label>Amount</label>
                <input
                    type="number" 
                    value={expenseAmount} 
                    placeholder="Add Amount" 
                    onChange={amountHandler} 
                    min='0.01' 
                    step='0.01'
                />
            </div>
            <div className="new-expense__control">
                <label>Date</label>
                <input 
                    type="date" 
                    value={expenseDate} 
                    onChange={dateHandler} 
                    min="2019-01-01" 
                    max="2022-12-31" 
                />
            </div>
        </div>
        <div className="new-expense__actions">
            <button onClick={cancelHandler}>Cancel</button>
            <button>Add Expense</button>
        </div>
    </form>
    )
}
export default ExpenseForm;